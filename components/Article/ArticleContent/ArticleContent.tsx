import { PortableText } from "@portabletext/react";

import articePortableText from './PortableComponent'
const ArticleContent = ({ ARTICLE_CONTENT }) => {
   const body = ARTICLE_CONTENT;
   return (
      <>
         <div className="prose max-w-none md:prose-lg lg:prose-xl prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 prose-invert h-full">
            <PortableText value={body} /></div>
      </>
   );
};

export default ArticleContent;
