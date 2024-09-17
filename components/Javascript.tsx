import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
   nodes: {
      Object_2: THREE.Mesh
   }
   materials: {
      mat_3220964: THREE.MeshStandardMaterial
   }
}

export function Javascript(props: JSX.IntrinsicElements['group']) {
   const { nodes, materials } = useGLTF('/models/javascript_1.glb') as GLTFResult
   return (
      <group {...props} dispose={null} scale={0.3}>

         <group rotation={[-Math.PI / 2, 0, 0]}>

            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Object_2.geometry}
               material={materials.mat_3220964}
            />


         </group>
      </group>
   )
}

useGLTF.preload('/models/javascript_1.glb')
