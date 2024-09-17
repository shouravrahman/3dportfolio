"use client";
import { useEffect, useState } from "react";


import Link from "next/link";
import ReactPaginate from "react-paginate";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import ArticleCard from "./ArticleCards/ArticleCard";

interface HomeArticleProps {
   isArchive?: boolean;
   noOfArticle?: number;
   articles: any;
   isSeries?: boolean;
   isExternal?: boolean
}

const HomeArticles: React.FC<HomeArticleProps> = ({
   isArchive,
   noOfArticle,
   articles,
}) => {
   const articlesPerPage = noOfArticle || 9;

   const [currentItems, setCurrentItems] = useState(articles || []);
   const [pageCount, setPageCount] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);

   useEffect(() => {
      const endOffset = itemOffset + articlesPerPage;
      setCurrentItems(articles.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(articles.length / articlesPerPage));
   }, [itemOffset, articlesPerPage, articles]);

   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * articlesPerPage) % articles.length;
      setItemOffset(newOffset);
   };
   // console.log(articles,'articles')

   const articlesToDisplay = noOfArticle || 3;

   return (
      <section className="max-w-7xl mx-auto c-space my-32 w-full" >
         <div className="w-full text-white-600">
            <p className="head-text">My Latest Articles</p>
         </div>
         <div className="flex flex-wrap mt-12">
            {currentItems
               ? (currentItems as any)
                  .slice(0, articlesToDisplay)
                  .map((each: any, i: number) => (
                     <ArticleCard
                        article={each}
                        key={i}
                        path={`/blogs/${each.slug.current}`}
                     />
                  ))
               : null}
         </div>

         <br />

         {
            !isArchive &&
            articles?.length > articlesToDisplay && (
               <div className="flex flex-col justify-center">
                  <ReactPaginate
                     breakLabel="..."
                     nextLabel={<AiFillCaretRight />}
                     onPageChange={handlePageClick}
                     pageRangeDisplayed={1}
                     pageCount={pageCount}
                     previousLabel={<AiFillCaretLeft />}
                     containerClassName="pagination"
                     activeClassName="active"
                  />
               </div>
            )}

         {isArchive && (
            <div className="w-full flex items-center">
               <Link
                  href={"/blogs"}
                  className="w-auto h-auto text-sm py-3 px-10 text-center dark:bg-slate-800 bg-appRed-100 rounded-full mx-auto text-white font-bold hover:!text-white dark:hover:!text-slate-400 transition-all transform hover:scale-105"
               >
                  View All Articles
               </Link>
            </div>
         )}
      </section>



   );
};

export default HomeArticles;
