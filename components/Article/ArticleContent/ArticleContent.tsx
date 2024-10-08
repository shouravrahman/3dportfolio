import { PortableText } from "@portabletext/react";


const ArticleContent = ({ ARTICLE_CONTENT }: any) => {
   const body = ARTICLE_CONTENT;
   return (
      <>
         <div className="prose max-w-none md:prose-lg lg:prose-xl prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 prose-invert h-full">
            <PortableText value={body} /></div>
      </>
   );
};

export default ArticleContent;
