
import { Metadata } from "next";
import { WEBSITE_NAME, META_SEO_KEYWORDS } from "@/constants/appSetup";
import { SanityDocument } from "@sanity/client";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import HomeArticles from "@/components/Article/HomeArticles";

export const metadata: Metadata = {
   title: "Articles",
   description: `Dive into insightful articles by ${WEBSITE_NAME}. Explore tech, coding, and innovation through our expert perspectives.`,
   keywords: META_SEO_KEYWORDS,
};

const Article = async () => {
   const articles = await sanityFetch<SanityDocument>({
      query: postsQuery,
   });

   return (

      <div className={"flex flex-col flex-wrap w-full"}>
         {articles?.length > 0 ? (
            <HomeArticles
               isArchive={false}
               noOfArticle={6}
               articles={articles}
               isSeries={false}
               isExternal={false}
            />
         ) : (
            <p>No Article Found</p>
         )}
      </div>


   );
};

export default Article;
