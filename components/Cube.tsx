"use client"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import { BufferGeometry, Material, Mesh } from 'three';

interface CubeGLTF {
   nodes: {
      Cube: {
         geometry: BufferGeometry;
         material: Material;
      };
   };
}
type CubeProps = JSX.IntrinsicElements['group'];
const Cube: React.FC<CubeProps> = ({ ...props }) => {
   const { nodes } = useGLTF('models/cube.glb') as unknown as CubeGLTF;

   const texture = useTexture('textures/cube.png');

   const cubeRef = useRef<Mesh<BufferGeometry, Material>>(null);
   const [hovered, setHovered] = useState(false);

   useGSAP(() => {
      if (!cubeRef.current) return;
      gsap
         .timeline({
            repeat: -1,
            repeatDelay: 0.5,
         })
         .to(cubeRef.current.rotation, {
            y: hovered ? '+=2' : `+=${Math.PI * 2}`,
            x: hovered ? '+=2' : `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
               each: 0.15,
            },
         });
   });

   return (
      <Float floatIntensity={2}>
         <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
            <mesh
               ref={cubeRef}
               castShadow
               receiveShadow
               geometry={nodes.Cube.geometry}
               material={nodes.Cube.material}
               onPointerLeave={() => setHovered(false)}
               onPointerEnter={() => setHovered(true)}
            >
               <meshMatcapMaterial matcap={texture} toneMapped={false} />
            </mesh>
         </group>
      </Float>
   );
};

useGLTF.preload('models/cube.glb');

export default Cube;
