
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import Button from "./HeroButton";
import { Feature, Project, ITechStack } from "@/types/interfaces";
import TechStack from "./TechStack";
import IconComponent from "./Icon";






const ProjectOverview: React.FC<{ title: string; subtitle: string; description: string }> = ({
   title,
   subtitle,
   description,
}) => (
   <div className="max-w-[75%] card-container flex flex-col max-md:mt-10 max-md:max-w-full">
      <h1 className="font-black text-3xl md:text-5xl">{title}</h1>
      <h2 className="my-4 text-xl mb-10">{subtitle}</h2>
      <p className="text-lg text-gray-100 leading-relaxed">{description}</p>
   </div>
);

const FeatureCard: React.FC<Feature> = ({ title, description, icon }) => (
   <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <IconComponent icon={icon} />
      <h4 className="text-2xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-lg text-gray-300">{description}</p>
   </div>
);

const ProjectFeatures: React.FC<{ features: Feature[] }> = ({ features }) => {
   console.log(features)
   return <div className="mt-12">
      <h3 className="text-4xl font-bold text-white">Key Features</h3>
      <p className="text-lg text-gray-300 mb-8">Explore the core features that make this project stand out.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
         ))}
      </div>
   </div>
}


const CallToAction: React.FC = () => (
   <div className="mt-16 flex flex-col items-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-center italic">
         Ready to elevate your brand with a powerful web presence?
      </h2>
      <Link href="#about" className="w-fit mt-8">
         <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
      </Link>
   </div>
);

const SinglePortfolio: React.FC<{ project: Project }> = ({ project }) => {
   return (
      <div className="flex flex-col items-center gap-4 mt-32 px-6 lg:px-24">
         <div className="flex flex-col md:flex-row items-start justify-between lg:mb-6">
            <TechStack technologies={project.technologies} />
            <ProjectOverview
               title={project.title}
               subtitle={project.subtitle}
               description={project.description}
            />
         </div>

         <div className="mt-9 flex justify-center">
            <Image
               src={project.mainImage}
               alt={project.title}
               width={1200}
               height={600}
               className="aspect-[2.04] w-full rounded-2xl max-md:max-w-full shadow-lg"
            />
         </div>

         <ProjectFeatures features={project.features} />

         <div className="prose max-w-none md:prose-lg lg:prose-xl prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 prose-invert">
            <PortableText value={project.body} />
         </div>

         <CallToAction />
      </div>
   );
};

export default SinglePortfolio;
