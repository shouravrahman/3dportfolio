// import { useState } from "react";
import Button from "./Button";

import {
   aboutLandingSectionQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import GlobeCard from "./Globe";
import { SanityDocument } from "next-sanity";
import { Key } from "react";


const About = async () => {
   const aboutSections = await sanityFetch<SanityDocument>({
      query: aboutLandingSectionQuery,
   });

   return (
      <section className="mx-auto max-w-7xl c-space my-20 " id="about">
         <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            {aboutSections.map((section: { _id: Key | null | undefined; imageUrl: string | undefined; image: { alt: any; }; title: string | undefined; subtitle: string | undefined; buttonText: string; buttonLink: string | undefined; }, i: number) => (
               <div
                  key={section._id}

                  className={`${i === aboutSections.length - 1 ? "xl:col-span-2  xl:row-span-3 " : "col-span-1 xl:row-span-3"}`}
               >
                  <div className="grid-container">
                     {section.imageUrl && (
                        <img
                           src={section.imageUrl}
                           alt={
                              section.image?.alt ||
                              "About Section Image"
                           }
                           className="w-full sm:h-[276px] h-fit object-contain"
                        />
                     )}
                     <div>
                        <p className="grid-headtext">{section.title}</p>
                        <p className="grid-subtext">
                           {section.subtitle}
                        </p>
                        {section.buttonText && (
                           <a
                              href={section.buttonLink}
                              className="my-4"
                           >
                              <Button
                                 label={section.buttonText}
                                 variant="primary"
                              />
                           </a>
                        )}
                     </div>
                  </div>
               </div>
            ))}

            <div className="col-span-1 xl:row-span-3">
               <GlobeCard />
            </div>
         </div>
      </section >
   );
};

export default About;
