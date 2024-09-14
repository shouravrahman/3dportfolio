"use client";

import { useState, useEffect } from "react";
import { SimpleLayout } from "@/components/Article/SimpleLayout";
import ProjectCard from "@/components/ProjectCard";

import { Project } from "@/types/interfaces";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { allProjectsQuery } from "@/sanity/lib/queries";



export default function Projects() {
   const [projects, setProjects] = useState<Project[]>([]);
   const [tab, setTab] = useState("All");

   useEffect(() => {
      async function fetchProjects() {
         const fetchedProjects = await sanityFetch<Project[]>({ query: allProjectsQuery });
         setProjects(fetchedProjects);
      }

      fetchProjects();


   }, []);

   const filteredProjects = projects.filter((project) => {
      if (tab === "All") return true;

      // Check if any technology in the project's technologies array matches the tab
      return project.technologies.some((tech) => tech.name === tab);
   });

   return (
      <SimpleLayout
         title="Things I've made trying to put my dent in the universe."
         intro="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
         <div className="mb-10 flex items-center justify-center gap-6 px-4 md:justify-normal">
            {["All", "React", "Next.js", "AI"].map((tabName) => (
               <button
                  key={tabName}
                  className={`rounded-xl px-3 py-2 font-semibold ${tab === tabName ? "bg-blue-600 text-white" : "bg-white text-black"
                     }`}
                  onClick={() => setTab(tabName)}
               >
                  {tabName}
               </button>
            ))}
         </div>
         <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 px-4 sm:grid-cols-2 lg:grid-cols-3"
         >
            {filteredProjects.map((project) => (
               <ProjectCard key={project._id} project={project} />
            ))}
         </ul>
      </SimpleLayout>
   );
}
