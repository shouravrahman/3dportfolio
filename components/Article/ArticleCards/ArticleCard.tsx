import Link from "next/link";



import ArticleTags from "../ArticleTags/ArticleTags";
import Image from "next/image";
import { format } from "date-fns";
import readingTime from "reading-time";
import { urlFor } from "@/sanity/lib/image";
import { IArticleHeaderData } from "@/types/interfaces";

interface IProp {
   article: IArticleHeaderData;
   path: string;
   isExternal: boolean;
}

const ArticleCard = ({ article, path }: IProp) => {
   // set url and path
   const {
      // _createdAt,
      title,
      body,
      tags,
      publishedAt,
      meta_description,
      estimatedReadingTime,
      mainImage: {
         alt,
         asset: { _ref },
      },
   } = article;
   const readTime = readingTime(body ? body : []);

   return (
      <div
         className="w-full"
      >
         <div
            className=' card w-full max-w-[400px]  dark:drop-shadow-lg flex flex-col justify-between pb-5'
         >
            <div>
               <div className={"rounded-t-[4px] overflow-hidden h-[200px] relative"}>
                  <Image
                     src={`${urlFor(_ref)}`}
                     alt={alt}
                     layout="fill"
                     quality={70}
                     priority={true}
                     blurDataURL={`${urlFor(_ref)}`}
                     placeholder="blur"
                  />
               </div>

               <div className={"d-block  py-0"}>
                  <p
                     className={"font-bold text-xs pt-3 mb-0 md:mb-3 text-appRed-100"}
                  >
                     <span className="pr-1">
                        {format(new Date(publishedAt), "MMMM d, yyyy")}
                     </span>{" "}
                     {readTime.text !== "0 min read" && (
                        <>
                           {" "}
                           |{" "}
                           <span className="pl-1 text-transfrom-capitalize">
                              {" "}
                              {estimatedReadingTime ? estimatedReadingTime : '2'} mins
                           </span>{" "}
                        </>
                     )}
                  </p>


                  <Link href={path}>
                     <h1
                        className={
                           "prose prose-invert font-bold cursor-pointer tracking-wide  transition-colors duration-300 mb-3"
                        }
                     >
                        {title}
                     </h1>
                  </Link>
                  <ArticleTags tags={tags} isLight={false} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ArticleCard;
