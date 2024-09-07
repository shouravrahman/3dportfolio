
"use client"

import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Hero = () => {
   return (
      <section className="min-h-screen w-full flex flex-col relative" id="home">
         <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
               Hi, I am Shourav <span className="waving-hand">👋</span>
            </p>
            <p className="hero_tag text-gray_gradient">Building Websites & SAAS</p>
         </div>

         <div className="w-full h-full absolute inset-0">
            <Canvas style={{ height: '100vh', width: '100vw', display: "flex", justifyContent: "center", alignItems: "center" }}>
               <PerspectiveCamera makeDefault />

            </Canvas>
         </div>
      </section>
   )
}

export default Hero
