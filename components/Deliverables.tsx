import React from 'react';

const deliverablesData = [
   "Custom WordPress Theme",
   "WPML Multi-Language Support",
   "Performance Optimizations",
   "SEO Enhancements",
   "Documentation & Support"
];

const DeliverablesList = () => (
   <div className='mt-12 p-6 self-start'>
      <h3 className='text-4xl font-bold leading-10  text-white mb-6 border-b border-gray-600 pb-4'>Deliverables</h3>
      <ul className='space-y-4'>
         {deliverablesData.map((item, index) => (
            <li key={index} className='flex items-center text-lg text-gray-100 p-4 border border-gray-800 rounded-lg hover:bg-gray-700 hover:shadow-lg transition-all duration-300'>
               <svg className='w-6 h-6 mr-4 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
               </svg>
               {item}
            </li>
         ))}
      </ul>
   </div>
);

export default DeliverablesList;
