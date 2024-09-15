"use client"
import { FaReact, FaWordpress, FaCode, FaExchangeAlt } from "react-icons/fa";
export const TechnologyHighlights = () => {
   const technologies = [
      { icon: FaReact, name: "React for Interactive Elements" },
      { icon: FaWordpress, name: "WordPress Custom Post Types" },
      { icon: FaCode, name: "Advanced Custom Fields (ACF)" },
      { icon: FaExchangeAlt, name: "AJAX for Dynamic Content Loading" },
   ];

   return (
      <div className='mt-12 self-start'>
         <h3 className='text-4xl font-bold leading-10 '>Technology Highlights</h3>
         <ul className='ml-9 mt-5 list-none space-y-4'>
            {technologies?.map(({ icon: Icon, name }) => (
               <li key={name} className='text-lg text-gray-100 flex items-center'>
                  <Icon className="text-2xl mr-4 transition-transform duration-500 hover:rotate-12 hover:text-blue-400" />
                  {name}
               </li>
            ))}
         </ul>
      </div>
   );
};
