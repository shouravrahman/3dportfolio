
import About from "@/components/About";
import HomeArticles from "@/components/Article/HomeArticles";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import WorkExperience from "@/components/WorkExperience";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";



export default async function Home() {

   const articles = await sanityFetch<SanityDocument>({
      query: postsQuery,
   });
  return (
     <main className=" mx-auto overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <HomeArticles articles={articles} />
        <Testimonials />
        <WorkExperience />
        <Contact />

     </main>

  );
}
