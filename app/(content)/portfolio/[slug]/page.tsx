
import { SanityDocument } from "@sanity/client";
import SinglePortfolio from "@/components/SinglePortfolio";
import { singleProjectQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Project } from "@/types/interfaces";


interface Props {
   params: { slug: string };
}

export async function generateStaticParams() {
   const projects = await sanityFetch<SanityDocument[]>({
      query: `*[_type == "project"]{ "slug": slug.current }`,
   });

   return projects.map((project) => ({
      slug: project.slug,
   }));
}

export default async function PortfolioDetailsPage({ params }: Props) {
   const project = await sanityFetch<Project>({
      query: singleProjectQuery,
      params: { slug: params.slug },
   });
   console.log(project, "project=================")
   return (
      <section className="max-w-7xl mx-auto c-space my-20">
         <SinglePortfolio project={project} />
      </section>
   );
}
