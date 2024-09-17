
import ArticleTags from "../ArticleTags/ArticleTags";
import ArticleImage from "../ArticleImage";

import Image from "next/legacy/image";
import { format } from "date-fns";
import { urlFor } from "@/sanity/lib/image";

const ArticleHeader = ({ ARTICLE_DETAILS, isSnippet }: any) => {
   const {
      title, author,
      publishedAt,
      _updatedAt,
      mainImage,
      tags,
      estimatedReadingTime,
      mainImageWidth,
      mainImageHeight
   } = ARTICLE_DETAILS;

   return (
      <div className=' font-bold'>
         <h1
            className=' my-3 text-center text-2xl text-pretty font-bold md:text-4xl leading-snug'
         >
            {title}
         </h1>

         <div className='flex flex-wrap items-center justify-center text-base font-medium '>
            <div className='flex flex-wrap items-center justify-evenly '>
               <div className="hidden md:block ">

                  <Image
                     src={`${urlFor(author?.image?.asset?._ref)}`}
                     alt={author?.image?.alt}
                     height={40}
                     width={40}
                     className='h-10 w-10 rounded-full'
                  />
               </div>
               <div className='m-2 font-semibold'>
                  <p>{author?.name}</p>
               </div>{" "}
               <div className=' m-2 '>
                  <p>{format(new Date(publishedAt), "MMMM d, yyyy")}</p>
               </div>
               <div className='m-2 text-white-800'>📖 {estimatedReadingTime ? estimatedReadingTime : '2'} mins</div>
            </div>
         </div>
         {!isSnippet && (
            <ArticleImage
               src={`${urlFor(mainImage?.asset?._ref)}`}
               alt={mainImage?.alt}
               imageWidth={mainImageWidth}
               imageHeight={mainImageHeight}
               className="my-2"
            />
         )}
         {!isSnippet && (
            <ArticleTags tags={tags} center={true} />
         )}

         <div
            className=
            "flex flex-col flex-wrap justify-center text-center mb-4"
         >


            <div className='text-sm m-2 md:text-lg'>
               <p>
                  <span>Last Updated ---{">"}</span>
                  <span className='text-white-500'>
                     {format(new Date(_updatedAt), "MMMM d, yyyy")}
                  </span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default ArticleHeader;
