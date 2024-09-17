import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Button from "./HeroButton";
import { Feature, Project } from "@/types/interfaces";
import TechStack from "./TechStack";
import IconComponent from "./Icon";

const ProjectOverview: React.FC<{ title: string; subtitle: string; description: string }> = ({
   title,
   subtitle,
   description,
}) => (
   <div className="w-full lg:max-w-[75%] card-container flex flex-col md:mt-6 lg:mt-0">
      <h1 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">{title}</h1>
      <h2 className="my-4 text-lg sm:text-xl mb-6 ">{subtitle}</h2>
      <p className="text-base sm:text-lg text-gray-100 leading-relaxed">{description}</p>
   </div>
);

const FeatureCard: React.FC<Feature> = ({ title, description, icon }) => {
   return (
      <div className="bg-gradient-to-br from-black-200 to-black-300 p-4 sm:p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-200 ease-in-out">

         <h4 className="text-lg flex gap-2 sm:text-xl font-semibold text-gray-100 mb-2">
            {icon && (
               <div className="mb-3 text-white text-2xl flex items-center justify-center">
                  <IconComponent icon={icon} />
               </div>
            )}
            {title}
         </h4>
         <p className="text-sm sm:text-base text-gray-400">
            {description}
         </p>
      </div>
   );
};



const ProjectFeatures: React.FC<{ features: Feature[] }> = ({ features }) => {
   return (
      <div className="mt-12 w-full">
         <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Key Features</h3>
         <p className="text-base sm:text-lg text-gray-300 mb-8">Explore the core features that make this project stand out.</p>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
               <FeatureCard key={index} {...feature} />
            ))}
         </div>
      </div>
   )
}

const CallToAction: React.FC = () => (
   <div className="relative mt-10 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black-200 to-black-300 transform -skew-y-6"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-col items-center">
         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white mb-6 leading-tight animate-fade-in-up">
            Ready to elevate your brand with a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
               powerful web presence?
            </span>
         </h2>
         <p className="mt-4 text-xl sm:text-2xl text-gray-300 text-center max-w-2xl animate-fade-in-up animation-delay-300">
            Let&apos;s create something extraordinary together and make your digital dreams a reality.
         </p>
         <div className="mt-10 animate-fade-in-up animation-delay-600">
            <Link href="#about">
               <Button
                  name="Let's work together"
                  isBeam
                  containerClass="w-full sm:w-fit sm:min-w-[240px] transform hover:scale-105 transition-transform duration-300 ease-in-out"
               />
            </Link>
         </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
   </div>
);

const SinglePortfolio: React.FC<{ project: Project }> = ({ project }) => {
   return (
      <div className="flex flex-col items-center  md:gap-8 px-4 sm:px-6 lg:px-24 max-w-7xl mx-auto">
         <div className="flex flex-col gap-4 lg:flex-row items-start justify-between w-full">
            <div className="w-full lg:w-1/4 mb-6 lg:mb-0 ">
               <TechStack technologies={project.technologies} />
            </div>
            <ProjectOverview
               title={project.title}
               subtitle={project.subtitle}
               description={project.description}
            />
         </div>

         <div className="mt-9 flex justify-center w-full">
            <Image
               src={project.mainImage}
               alt={project.title}
               width={1200}
               height={600}
               className="h-full md:h-[600px] object-cover w-full rounded-2xl shadow-lg"
            />
         </div>

         <ProjectFeatures features={project.features} />

         <div className="prose max-w-none md:prose-lg lg:prose-xl prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 prose-invert">
            <PortableText value={project.body} onMissingComponent={false} />
         </div>

         <CallToAction />
      </div>
   );
};

export default SinglePortfolio;
