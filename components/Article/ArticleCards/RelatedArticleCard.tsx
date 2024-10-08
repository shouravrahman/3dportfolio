import Link from "next/link";


import ArticleTags from "../ArticleTags/ArticleTags";
import { format } from "date-fns";
import readingTime from "reading-time";
import { IArticleHeaderData } from "@/types/interfaces";

interface IProp {
   article: IArticleHeaderData;
   path: string;
   isExternal: boolean;
   previousPost?: boolean;
   isSeries: boolean
}

const RelatedArticleCard = ({ article, path, isExternal }: IProp) => {
   // set url and path

   const {
      // _createdAt,
      title,
      body,
      tags,
      publishedAt,
      meta_description,

      estimatedReadingTime,

   } = article;
   const readTime = readingTime(body ? body : []);

   return (
      <div
         className={
            "mb-[30px] h-fit w-full px-2 md:w-1/2 md:px-[15px] lg:w-1/2"
         }
      >


         <div
            className='card-container flex flex-col justify-between border-b-[5px]  pb-5  dark:drop-shadow-lg'

         >
            <div>
               <div className={"d-block px-[15px] py-0"}>
                  <p
                     className={
                        "mb-0 pt-3 text-xs font-bold text-appRed-100 md:mb-3"
                     }
                  >
                     <span className='pr-1'>
                        {format(new Date(publishedAt), "MMMM d, yyyy")}
                     </span>{" "}
                     {
                        readTime.text !== "0 min read" && (
                           <>
                              {" "}
                              |{" "}
                              <span className='text-transfrom-capitalize pl-1'>
                                 {" "}
                                 {estimatedReadingTime
                                    ? estimatedReadingTime
                                    : "2"}{" "}
                                 mins
                              </span>{" "}
                           </>
                        )
                     }
                  </p >

                  {
                     isExternal ? (
                        <a
                           href={path}
                           target='_blank'
                           rel='noopener noreferrer'
                           aria-label={`${title}`}
                        >
                           <h1
                              className={
                                 "cursor-pointer text-[16px] font-bold tracking-wide transition-colors duration-300 hover:text-appPurple-100 md:text-[22px]"
                              }
                           >
                              {title}
                           </h1>
                        </a >
                     ) : (
                        <Link href={path}>
                           <h1
                              className={
                                 "cursor-pointer text-[16px] font-bold tracking-wide transition-colors duration-300 hover:text-appPurple-100 md:text-[22px]"
                              }
                           >
                              {title}
                           </h1>
                        </Link>
                     )}

                  <p
                     className='article_card__intro
                                 mt-2 text-sm font-normal md:mt-1'
                  >
                     {meta_description.slice(0, 150)} ...
                  </p>
                  <ArticleTags tags={tags} isLight={false} />
               </div >
            </div >
         </div >
      </div >
   );
};

export default RelatedArticleCard;
