
"use client"

import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Room from "./Room"
import { Suspense } from "react"
import CanvasLoader from "./CanvasLoader"
// import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "@/constants"
import Target from "./Target"
import ReactLogo from "./ReactLogo"
import Rings from "./Rings"
import Cube from "./Cube"
import HeroCamera from "./HeroCamera"
import Button from "./HeroButton"
import Link from "next/link"
import { Javascript } from "./Javascript"

const Hero = () => {
   // const controls = useControls("Room", {
   //    positionX: {
   //       value: 2.5,
   //       min: -10,
   //       max: 10
   //    },
   //    positionY: {
   //       value: 2.5,
   //       min: -10,
   //       max: 10
   //    },
   //    positionZ: {
   //       value: 2.5,
   //       min: -10,
   //       max: 10
   //    },
   //    rotationX: {
   //       value: 2.5,
   //       min: -10,
   //       max: 10
   //    },
   //    rotationY: {
   //       value: 2.5,
   //       min: -10,
   //       max: 10
   //    },
   //    rotationZ: {
   //       value: 2.5,
   //       min: -10,
   //       max: 10
   //    },
   //    scale: {
   //       value: 1,
   //       min: 0.1,
   //       max: 10
   //    }
   // })
   const isSmall = useMediaQuery({ maxWidth: 440 });
   const isMobile = useMediaQuery({ maxWidth: 768 });
   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

   const sizes = calculateSizes(isSmall, isMobile, isTablet);

   return (
      <section className="min-h-screen w-full flex flex-col relative" id="home">
         <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
               Hi, I am Shourav <span className="waving-hand">👋</span>
            </p>
            <p className="hero_tag text-gray_gradient">Building Websites & SAAS</p>
         </div>

         <div className="w-full  h-full absolute inset-0">
            {/* <Leva /> */}
            <Canvas className="w-full h-full">
               <Suspense fallback={<CanvasLoader />}>
                  <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                  <HeroCamera isMobile={isMobile}>
                     <Room
                        scale={sizes.deskScale}
                        position={sizes.deskPosition}
                        rotation={[0.1, -Math.PI, 0]}
                     />
                  </HeroCamera>
                  <group>
                     <Target position={sizes.targetPosition} />
                     <ReactLogo position={sizes.reactLogoPosition} />
                     <Rings position={sizes.ringPosition} />

                     {/* <Javascript position={sizes.cubePosition} /> */}
                     <Cube position={sizes.cubePosition} />

                  </group>
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 10]} intensity={0.5} />
               </Suspense>
            </Canvas>
         </div>
         <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <Link href="#about" className="w-fit">
               <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96 " />
            </Link>
         </div>
      </section>
   )
}

export default Hero
