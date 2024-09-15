import { Project, Icon } from "@/types/interfaces";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import * as ReactIcons from "react-icons/fa";

const IconComponent: React.FC<{ icon: Icon }> = ({ icon }) => {
   if (icon.type === "reactIcon") {
      const IconComponent = ReactIcons[icon.value as keyof typeof ReactIcons] as IconType;
      return <IconComponent />;
   } else if (icon.type === "imageUrl") {
      return <Image src={icon.value} alt="Technology Icon" width={24} height={24} />;
   } else if (icon.type === "svg") {
      return <span dangerouslySetInnerHTML={{ __html: icon.value }} />;
   }
   return null;
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
   <li className="text-pretty gradient-bg border border-black-300 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 pb-4  duration-300 ease-in-out">
      <Link href={`/portfolio/${project.slug}`}>
         <div className="relative h-48">
            <Image
               src={project.mainImage}
               alt={project.title}
               layout="fill"
               objectFit="cover"
            />
         </div>
         <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.subtitle}</p>
            <div className="flex flex-wrap gap-2">
               {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="rounded-lg px-2 py-2 flex gap-1 items-center font-semibold transition-all duration-300 ease-in-out border text-xs border-gray-400">
                     <IconComponent icon={tech.icon} />
                     {tech.name}
                  </span>
               ))}
            </div>
         </div>
      </Link>
   </li>
);

export default ProjectCard;
