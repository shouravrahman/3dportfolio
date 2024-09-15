"use client";
import React, { RefObject } from "react";

import { AiOutlineArrowUp } from "react-icons/ai";
import ReadingProgressLine from "./ReadingProgressLine";
import ArticleHeader from "./ArticleHeader/ArticleHeader";
import ArticleContent from "./ArticleContent/ArticleContent";
import SocialShare from "./SocialShare";


const ArticleDetails = ({ post, relatedPosts, isSnippet, isSeries }: any) => {
   const target: RefObject<HTMLDivElement> = React.createRef();
   const authorInfo = post.author;
   const isBrowser = () => typeof window !== "undefined";

   function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: "smooth" });
   }

   return (
      <>
         <ReadingProgressLine target={target} />
         <section className="max-w-7xl mx-auto c-space my-20">
            <div className="flex flex-row-reverse">
               <div className="px-0 md:px-[15px] ">
                  <article
                     className="px-3 lg:my-6  md:pt-0 mx-auto  text-lg leading-relaxed"
                     ref={target}
                  >
                     <ArticleHeader
                        ARTICLE_DETAILS={post}
                        isSnippet={isSnippet}
                     />
                     <div >
                        <ArticleContent ARTICLE_CONTENT={post.body} />
                     </div>
                  </article>

               </div>
               <div className="hidden md:block">
                  <SocialShare />
               </div>

               <button
                  className="fixed bottom-0 py-10 px-40"
                  onClick={scrollToTop}
               >
                  <AiOutlineArrowUp className="text-[26px]" />
               </button>
            </div>
         </section>
      </>
   );
};

export default ArticleDetails;
