"use client"
import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';
import { Mesh } from 'three';
type RingsProps = {
   position: [number, number, number]; // Expect a tuple of three numbers
};
const Rings: React.FC<RingsProps> = ({ position }) => {
   const refList = useRef<Mesh[]>([]);
   const getRef = useCallback((mesh: Mesh | null) => {
      if (mesh && !refList.current.includes(mesh)) {
         refList.current.push(mesh);
      }
   }, []);

   const texture = useTexture('textures/rings.png');

   useGSAP(
      () => {
         if (refList.current.length === 0) return;

         refList.current.forEach((r) => {
            r.position.set(position[0], position[1], position[2]);
         });

         gsap
            .timeline({
               repeat: -1,
               repeatDelay: 0.5,
            })
            .to(
               refList.current.map((r) => r.rotation),
               {
                  y: `+=${Math.PI * 2}`,
                  x: `-=${Math.PI * 2}`,
                  duration: 2.5,
                  stagger: {
                     each: 0.15,
                  },
               },
            );
      },
      {
         dependencies: position,
      },
   );

   return (
      <Center>
         <group scale={0.5}>
            {Array.from({ length: 4 }, (_, index) => (
               <mesh key={index} ref={getRef}>
                  <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
                  <meshMatcapMaterial matcap={texture} toneMapped={false} />
               </mesh>
            ))}
         </group>
      </Center>
   );
};

export default Rings;
