"use client"

import RelatedArticles from "../RelatedArticle/RelatedArticle";
import SocialShare from "../SocialShare";

import useDeviceSize from "@/hooks/useDeviceSize";


const ArticelFooter = ({ isSeries, relatedPosts, isSnippet }: any) => {
   const deviceSize: any = useDeviceSize();

   const wrapperClasses =
      "bg-white dark:bg-slate-800 dark:border-none border-slate-100 shadow-lg border md:rounded-[8px] px-[15px] py-[10px] mb-[30px] overflow-hidden";
   return (
      <>
         <div className="px-4">
            <div className="mx-auto lg:px-[15px] mt-20">
               <div className={"flex flex-wrap"}>
                  <h1 className="px-3 w-full mb-5 text-xl md:text-3xl font-bold ">
                     LEAVE A COMMENT
                  </h1>

               </div>
            </div>


            {deviceSize !== "desktop" ? (
               <div className={wrapperClasses}>
                  <p className="border-b border-gray-300 pb-2 mb-3 font-medium w-full">
                     Share this article
                  </p>

                  <SocialShare />
               </div>
            ) : (
               <SocialShare />
            )}

            <RelatedArticles relatedPosts={relatedPosts}
               isSnippet={isSnippet}
               isSeries={isSeries}
            />
         </div>
      </>
   );
};

export default ArticelFooter;
