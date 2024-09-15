// pages/about.tsx
import { Metadata } from 'next';
import { WEBSITE_NAME, META_SEO_KEYWORDS } from '@/constants/appSetup';
import { SanityDocument } from '@sanity/client';

import Image from 'next/image';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { aboutPageQuery, postsQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
   title: 'About',
   description: `Learn more about Shourav, a Full Stack Developer at ${WEBSITE_NAME}. Discover skills, experience, and more.`,
   keywords: META_SEO_KEYWORDS,
};

interface AboutSection {
   title: string;
   content: string;
}

interface Skill {
   name: string;
}

interface Education {
   degree: string;
   institution: string;
   year: string;
}

interface AboutPageData {
   intro: {
      title: string;
      subtitle: string;
      description: string;
      buttonText: string;
      buttonLink: string;
      image: string;
   };
   aboutSections: AboutSection[];
   skills: Skill[];
   education: Education;
}

const About = async () => {
   const about = await sanityFetch<AboutPageData>({ query: aboutPageQuery });

   console.log(about)
   return (
      <section className="c-space min-h-screen pt-20 md:pt-32 pb-20 text-white max-w-7xl mx-auto">
         <div className=" mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
               <div className="lg:w-1/2">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slideInLeft">
                     Hey! I'm Shourav
                     <span className="text-white-500">(show-rob)</span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-white-700 mb-8 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                     Full Stack Developer
                  </h2>
                  <p className="text-white-700 md:text-lg leading-relaxed mb-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                     {about?.intro.description}
                  </p>
                  <a href={about?.intro.buttonLink} className="bg-white-800 text-black-300 px-6 py-2 rounded-full font-semibold hover:bg-white-700 transition duration-300 animate-popIn" style={{ animationDelay: '0.6s' }}>
                     {about?.intro.buttonText}
                  </a>
               </div>
               <div className="lg:w-1/2 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                  <Image
                     src={about?.intro.image}
                     alt="Shourav - Full Stack Developer"
                     width={400}
                     height={400}
                     className="rounded-full shadow-xl hover:scale-105 transition duration-300"
                  />
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {about?.aboutSections.map((section, index) => (
                  <div key={index} className="mb-12 opacity-0 animate-fadeIn">
                     <h2 className="text-2xl font-bold mb-4 text-white border-b-2 border-white-500 pb-2 inline-block">{section.title}</h2>
                     <p className="text-white-700 leading-relaxed text-base">{section.content}</p>
                  </div>
               ))}
            </div>

            <div className="mt-12 text-center">
               <h2 className="text-2xl font-bold mb-4 animate-slideInLeft">My Skills</h2>
               <div>
                  {about?.skills.map((skill, index) => (
                     <span key={index} className="inline-block bg-gray-800 text-gray-100 px-4 py-2 rounded-full text-sm font-semibold m-1 animate-popIn shadow-md hover:shadow-lg transform transition-all duration-300 ease-out hover:scale-105">
                        {skill.name}
                     </span>
                  ))}
               </div>
            </div>

            <div className="mt-20 animate-fadeIn md:w-[60%] mx-auto">
               <h2 className="text-2xl font-bold mb-8 text-center">My Education</h2>
               <div className="bg-black-300 rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                     <h3 className="text-xl font-semibold">{about?.education.degree}</h3>
                     <span className="text-white-500 self-start md:self-auto">{about?.education.institution}</span>
                  </div>
                  <span className="inline-block bg-white-800 text-black-300 px-3 py-1 rounded-full text-sm font-semibold">
                     {about?.education.year}
                  </span>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
