"use client";

import Globe from "react-globe.gl";
import { globeSectionQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { useEffect, useState } from "react";

const GlobeCard = () => {
   // State to manage globe section data
   const [globeSection, setGlobeSection] = useState<any>(null);
   const [isLoading, setIsLoading] = useState(true); // State to manage loading
   const [error, setError] = useState(null); // State to manage errors

   useEffect(() => {
      const fetchGlobeSection = async () => {
         try {
            const data = await sanityFetch({
               query: globeSectionQuery,
            });

            setGlobeSection(data);
         } catch (err: any) {
            console.error("Failed to fetch globe section data:", err);
            setError(err);
         } finally {
            setIsLoading(false);
         }
      };

      fetchGlobeSection();
   }, []);

   // Render a loading state while data is being fetched
   if (isLoading) {
      return <p>Loading...</p>;
   }

   // Render an error state if there's an error
   if (error) {
      return <p>Failed to load data. Please try again later.</p>;
   }

   // If data is still null after loading, return null (or a fallback UI)
   if (!globeSection) {
      return null;
   }

   return (
      <div className="grid-container">
         <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
            <Globe
               height={326}
               width={326}
               backgroundColor="rgba(0, 0,0,0)"
               showAtmosphere
               showGraticules
               globeImageUrl={globeSection.globeImageUrl}
               bumpImageUrl={globeSection.bumpImageUrl}
               labelsData={globeSection.labelsData}
            />
         </div>
         <div>
            <p className="grid-headtext">{globeSection.headerText}</p>
            <p className="grid-subtext">{globeSection.subText}</p>

         </div>
      </div>
   );
};

export default GlobeCard;
