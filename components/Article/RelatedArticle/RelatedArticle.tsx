
import RelatedArticleCard from "../ArticleCards/RelatedArticleCard";
interface RelatedArticleProps {
   relatedPosts: any;
   isSnippet: boolean;
   isSeries: boolean;
}

const RelatedArticles: React.FC<RelatedArticleProps> = ({
   relatedPosts,
   isSnippet,

}) => {
   return (
      <>
         <div className='container mx-auto mt-20 px-0 lg:px-[15px]'>
            <div className={"flex flex-wrap"}>
               <h1 className='mb-5 w-full px-3 text-xl font-bold text-appPurple-100 dark:text-appRed-100 md:text-3xl'>
                  READ MORE {isSnippet ? "SNIPPETS" : "ARTICLES"}
               </h1>
               <hr className='border-1 mx-auto mb-5 w-[98%]' />
               {!isSnippet && relatedPosts?.length
                  ? relatedPosts
                     .slice(0, 2)
                     .map((each: any, i: number) => (
                        <RelatedArticleCard
                           article={each}
                           key={i + each._id}
                           isExternal={false}
                           previousPost={false}
                           isSeries={false}
                           path={`/articles/${each.slug.current}`}
                        />
                     ))
                  : null}


            </div>
         </div>
      </>
   );
};

export default RelatedArticles;
