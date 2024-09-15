import { ImageSize } from "@/types/enums";



import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { combineClasses } from "@/utils/combineClasses";
interface IArticleImage {
   src: string;
   caption?: string;
   size?: ImageSize;
   alt?: string;
   className?: string;
   imageWidth?: number;
   imageHeight?: number;
}
const ImageArticle = ({
   src,
   caption,
   size = ImageSize.DEFAULT,
   alt,
   className,
   imageWidth,
   imageHeight,
}: IArticleImage) => {
   return (
      <div
         className={combineClasses(

            className,
            " mx-auto "
         )}
      >
         <Image
            alt={alt}
            loading='lazy'
            src={`${urlFor(src)}`}
            objectFit='contain'
            height={imageHeight}
            width={imageWidth}

         />
         {caption && (
            <p
               className='article_image__caption
                        mb-0 mt-2 w-full text-center text-sm'

            >
               {caption}
            </p>
         )}
      </div>
   );
};

export default ImageArticle;
