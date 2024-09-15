
import React from "react";
import SocialLink from "./SocialLink";
import { BsDownload } from "react-icons/bs";
import Button from "./HeroButton";

const ProfileCard = () => {
   return (
      <div className='flex w-full max-w-[400px] flex-col rounded-[50px] card-container  px-4 py-3 '>
         <div className='flex w-full flex-col  gap-2 rounded-[50px]   px-4 py-3 max-md:pr-5'>
            <img
               loading='lazy'
               srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&'
               className='aspect-1 max-w-full rounded-[50px]'
            />
            <div className='mt-10 flex flex-col px-6 '>
               <div className='card-headtext underline'>
                  shourav360d@gmail.com
               </div>
               {/* <div className='self-start text-2xl '>
                        Base in Sylhet, Bangladesh
                    </div> */}
            </div>
            <Button name="Download CV" isBeam />


            <div className='flex flex-col justify-between gap-2 rounded-lg  p-4  mt-4'>
               <div className=' text-center text-base font-extrabold '>
                  Find Me also on:
               </div>
               <SocialLink />
            </div>
         </div>
      </div>
   );
};

export default ProfileCard;
