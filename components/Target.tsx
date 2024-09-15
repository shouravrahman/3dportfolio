import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Mesh } from 'three';




// type TargetProps = Omit<JSX.IntrinsicElements['mesh'], 'position'> & {
//    position?: [number, number, number]; // Explicitly type position as a tuple
// };
type TargetProps = JSX.IntrinsicElements['mesh'] & {
   position?: [number, number, number];
};
const Target: React.FC<TargetProps> = (props) => {
   const targetRef = useRef<Mesh | null>(null);
   const { scene } = useGLTF(
      'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
   );

   useGSAP(() => {
      if (targetRef.current) {
         gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
         });
      }
   });

   return (
      <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
         <primitive object={scene} />
      </mesh>
   );
};

export default Target;
