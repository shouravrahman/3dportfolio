import React from 'react'

import Image from "next/image";
import { urlFor } from '@/sanity/lib/image';

const ImagePortableCom = ({ value }) => {
   if (!value?.asset?._ref) {
      return value;
   }
   return (
      <>
         <div className='flex justify-center flex-col'>

            <Image
               alt={value.alt || "Image"}
               loading="lazy"
               src={`${urlFor(value)}`}
               height={value?.imageHeight}
               width={value?.imageWidth}
               objectFit='contain'
            />
            {
               value.alt && <i className='text-gray-600 flex justify-center text-center'>{value.alt}</i>
            }



         </div>
      </>
   );
}

export default ImagePortableCom
