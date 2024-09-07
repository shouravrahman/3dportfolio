"use client"
import Hero from "@/components/Hero";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const RotatingCube = () => {
   const meshRef = useRef<Mesh>(null)

   useFrame(() => {
      if (meshRef.current) {
         meshRef.current.rotation.y += 0.01
         meshRef.current.rotation.x += 0.01
         meshRef.current.rotation.z += 0.01
      }
   })
   return (
      <mesh ref={meshRef}>
         <cylinderGeometry args={[1, 1, 1]} />
         <meshLambertMaterial color="#468585" emissive="#468585" />
      </mesh>
   )
}
export default function Home() {
  return (
     <main className="max-w-7xl mx-auto">
        {/* <Canvas style={{ height: '100vh', width: '100vw', display: "flex", justifyContent: "center", alignItems: "center" }}>
           <OrbitControls enableZoom enablePan enableRotate />
           <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />
           <color attach="background" args={["#f0f0f0"]} />

           <RotatingCube />
        </Canvas> */}
        <Hero />
     </main>

  );
}
