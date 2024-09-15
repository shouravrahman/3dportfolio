import React from 'react';

const challengesData = [
   {
      challenge: "Multi-Language Content Management",
      description: "Managing content in multiple languages while ensuring consistent branding and messaging across regions.",
      solution: "Implemented a custom WordPress theme with WPML integration for seamless multi-language support, enabling easy content updates across all languages."
   },
   {
      challenge: "Performance Optimization",
      description: "Ensuring fast load times and a smooth user experience for a media-rich website.",
      solution: "Utilized lazy loading, optimized images, and minified assets to improve page load times while maintaining high-quality visuals."
   },
   // Add more challenges and solutions as needed
];

const ChallengesSolutions = () => (
   <div className='mt-12 py-6'>
      <h3 className='text-4xl font-bold leading-10 text-white mb-8 border-b border-gray-600 pb-4'>Challenges & Solutions</h3>
      <div className='space-y-10'>
         {challengesData.map(({ challenge, description, solution }, index) => (
            <div key={index} className='p-6 border border-gray-800 rounded-lg hover:shadow-xl transition-shadow duration-300'>
               {/* Challenge Section */}
               <h4 className='text-2xl font-semibold text-white mb-2'>{`Challenge: ${challenge}`}</h4>
               <p className='text-lg text-gray-300'>{description}</p>

               {/* Solution Section */}
               <div className='mt-6'>
                  <h4 className='text-2xl font-semibold text-white mb-2'>Solution</h4>
                  <p className='text-lg text-gray-300'>{solution}</p>
               </div>
            </div>
         ))}
      </div>
   </div>
);

export default ChallengesSolutions;
