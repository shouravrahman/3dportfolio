"use client";
import { ITechStack } from "@/types/interfaces";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import IconComponent from "./Icon";

const TechStack: React.FC<ITechStack> = ({ technologies, liveSiteUrl, githubUrl }) => {
   return (
      <div className="card p-4 mb-0 bg-gray-900 rounded-lg flex flex-col md:flex-row md:space-x-8 md:items-start">
         <div className="w-full">
            <p className="text-nowrap font-bold uppercase leading-[120%] text-white text-lg md:text-xl">
               Tech Stack
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
               {technologies.slice(0, 3).map(({ name, icon: Icon }, index) => (
                  <li key={index} className="bg-gray-800 text-white text-sm px-3 py-2 rounded-md flex items-center gap-2">
                     <IconComponent icon={Icon} />
                     {name}
                  </li>
               ))}
            </ul>
         </div>
         <div className="mt-6 md:mt-0 w-full">
            <div className="flex space-x-4">
               {liveSiteUrl && (
                  <Link href={liveSiteUrl} passHref>
                     <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                        <FaExternalLinkAlt className="text-lg" />
                        <span className="underline">Live Site</span>
                     </div>
                  </Link>
               )}
               {githubUrl && (
                  <Link href={githubUrl} passHref>
                     <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
                        <FaGithub className="text-lg" />
                        <span className="underline">GitHub</span>
                     </div>
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
};

export default TechStack;
