
import { Metadata } from "next";

import ArticleDetails from "@/components/Article/ArticleDetails";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { getRandomPostsQuery, postQuery, seriesRelatedPosts } from "@/sanity/lib/queries";
export const revalidate = false

interface Props {
   params: {
      slug: string;
   };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const post = await sanityFetch<SanityDocument>({
      query: postQuery,
      params,
   });
   if (!post)
      return {
         title: "Not Found",
         description: "The page is not found",
      };

   return {
      title: post?.title,
      description: post?.meta_description,
      keywords: post?.meta_tags,

   };
}



const SingleArticle = async ({ params }: Props) => {
   const post = await sanityFetch<SanityDocument>({
      query: postQuery,
      params,
   });
   const isSeries = post?.isSeries;
   let relatedPosts;
   if (isSeries) {
      // relatedPosts = await sanityFetch<SanityDocument>({
      //     query: seriesNextAndPerviousPostOfRelatedPost,
      //     params:{
      //         currentPostSlug:params?.slug,
      //         seriesSlug:post?.series?.slug?.current
      //     },

      // });
      relatedPosts = await sanityFetch<SanityDocument>({
         query: seriesRelatedPosts,
         params: {
            currentPostSlug: params?.slug,
            seriesSlug: post?.series?.slug?.current
         },

      });
   } else {
      relatedPosts = await sanityFetch<SanityDocument>({
         query: getRandomPostsQuery,
         params: {
            currentPostSlug: params?.slug,
         },
      });

   }


   return (
      <ArticleDetails
         isSeries={isSeries}
         isSnippet={false}
         post={post}
         relatedPosts={relatedPosts}
      />
   );
};

export default SingleArticle;
