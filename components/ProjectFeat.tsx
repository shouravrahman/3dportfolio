import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaShieldAlt, FaUserFriends } from 'react-icons/fa';
import { Icon } from "@/types/interfaces";
import { IconType } from "react-icons";
import * as ReactIcons from "react-icons/fa";
import Image from "next/image";
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
const FeatureCard = ({ icon, title, description }) => (
   <div className='bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
      <div className='text-4xl mb-4 text-white'>
         {icon}
      </div>
      <h4 className='text-2xl font-semibold text-white mb-2'>{title}</h4>
      <p className='text-lg text-gray-300'>{description}</p>
   </div>
);

const ProjectFeature: React.FC<{ features: { title: string; description: string }[] }> = ({ features }) = () => (
   <div className='mt-12'>
      <h3 className='text-4xl font-bold text-white'>Key Features</h3>
      <p className='text-lg text-gray-300 mb-8'>Explore the core features that make my projects stand out.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
         <FeatureCard
            icon={ }
            title=
            description='Build dynamic and interactive user interfaces with React, ensuring a responsive and engaging experience.'
         />
      </div>
   </div>
);

export default ProjectFeature;
