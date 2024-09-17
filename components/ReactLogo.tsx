import { Float, useGLTF } from '@react-three/drei';
import { Material, Mesh } from 'three';
type ReactLogoProps = JSX.IntrinsicElements['group'] & {
   position?: [number, number, number];
};
// useGLTF hook returns nodes as a generic Object3D. This type doesn't explicitly contain a geometry property unless it's specifically a Mesh object.

// cast the specific nodes to a THREE.Mesh type so that TypeScript understands they have a geometry property.
// Extend GLTF to specify the types for the nodes and materials
type GLTFResult = {
   nodes: {
      ['React-Logo_Material002_0']: Mesh; // Cast the node to a Mesh type
   };
   materials: {
      ['Material.002']: Material;
   };
};
const ReactLogo: React.FC<ReactLogoProps> = (props) => {
   const { nodes, materials } = useGLTF('models/react.glb') as unknown as GLTFResult;

   return (
      <Float floatIntensity={1}>
         <group position={[8, 8, 0]} scale={0.3} {...props} dispose={null}>
            <mesh
               geometry={nodes['React-Logo_Material002_0'].geometry}
               material={materials['Material.002']}
               position={[0, 0.079, 0.181]}
               rotation={[0, 0, -Math.PI / 2]}
               scale={[0.392, 0.392, 0.527]}
            />
         </group>
      </Float>
   );
};

useGLTF.preload('models/react.glb');

export default ReactLogo;
