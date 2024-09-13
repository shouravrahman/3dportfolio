
import { Metadata } from "next";
import { META_DESCRIPTION, META_SEO_KEYWORDS } from "@/constants/appSetup";
import { SanityDocument } from "@sanity/client";
import { getAboutQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Container } from "@/components/Container";
import ProfileCard from "@/components/ProfileCard";



export const metadata: Metadata = {
   title: "About",
   description: META_DESCRIPTION,
   keywords: META_SEO_KEYWORDS,
};

const About = async () => {
   // const about = await sanityFetch<SanityDocument>({
   //     query: getAboutQuery,
   // });
   // const getFirstAbout = about[0];

   return (
      <>
         <section className='my-24'>
            <Container>
               {/* {about?.length === 0 ? (
                        <p>No About Information Found</p>
                    ) : (
                        <>
                            <Text
                                title
                                className='text-appPurple-100 dark:text-appRed-100'
                            >
                                {getFirstAbout?.title}
                            </Text>

                            <div className='grid'>
                                <ArticleContent
                                    ARTICLE_CONTENT={getFirstAbout?.body}
                                />
                            </div>
                        </>
                    )} */}
               <div className='flex  flex-col-reverse items-start justify-between  gap-10 text-pretty px-5 md:flex-row'>
                  <ProfileCard />
                  <div className=' flex gap-10 max-md:flex-col max-md:gap-0'>
                     <div className=' max-w-full max-md:mt-10'>
                        <div className='max-w-fit justify-center self-start whitespace-nowrap rounded-[800px] border border-white px-7 py-1.5 text-center   '>
                           Introduction
                        </div>
                        <h2 className=' mt-4 text-4xl font-bold leading-snug '>
                           Hey! I am
                           <span className='ml-2 '>
                              Shourav(show - rob)
                           </span>
                           <br />
                           Full Stack Developer
                        </h2>
                        <p className='mt-4 text-lg leading-loose   max-md:max-w-full'>
                           I specialize in building user-friendly
                           websites and web applications with Next.js
                           and React.js. <br />
                           Using tools like Express and Supabase, I
                           love bringing ideas to life through clean,
                           efficient code.
                           <br /> Collaboration and clear communication
                           are essential to my workflow, ensuring that
                           every project runs smoothly from start to
                           finish. My background in integrating APIs,
                           managing state, and styling web apps helps
                           me create visually appealing and highly
                           functional products. I focus on crafting
                           unique digital experiences using JavaScript
                           and its ecosystem, including React, Next.js,
                           Astro, Node.js, and the MERN stack. <br />
                           Each project I take on is tailored to
                           reflect your brand and connect with your
                           audience. With a keen eye for detail and a
                           commitment to excellence, I strive to
                           deliver pixel-perfect designs.
                           <br />
                           I’m passionate about developing SaaS
                           products, exploring LangChain, and building
                           AI applications. Let's collaborate and
                           transform your ideas into impactful digital
                           solutions!
                        </p>
                     </div>
                  </div>
               </div>
               <div className=' mt-20 flex-wrap px-5 max-md:mt-10 max-md:max-w-full'>
                  <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                     <div className='flex w-[41%] flex-col max-md:ml-0 max-md:w-full'>
                        <div className='flex flex-col items-start self-stretch max-md:mt-6 max-md:max-w-full'>
                           <div className='max-w-fit justify-center self-start whitespace-nowrap rounded-[800px] border border-white px-7 py-1.5 text-center'>
                              About Me
                           </div>
                           <div className=' mt-4 text-4xl font-bold leading-snug '>
                              I Have Rich
                              <br />
                              Experience In Web
                              <br />
                              Site Design
                           </div>

                        </div>
                     </div>
                     <div className='ml-5 flex w-[59%] flex-col max-md:ml-0 max-md:w-full'>
                        <div className='flex grow flex-col justify-center self-stretch text-xl leading-9  max-md:mt-6 max-md:max-w-full'>
                           <img
                              loading='lazy'
                              srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/863d0b3b0d0baf403f7ffa70b0c791b89dfe5aa31e6e19180605e7963f282c80?apiKey=da07e19f41d04fb48b0651b8deb55908&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/863d0b3b0d0baf403f7ffa70b0c791b89dfe5aa31e6e19180605e7963f282c80?apiKey=da07e19f41d04fb48b0651b8deb55908&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/863d0b3b0d0baf403f7ffa70b0c791b89dfe5aa31e6e19180605e7963f282c80?apiKey=da07e19f41d04fb48b0651b8deb55908&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/863d0b3b0d0baf403f7ffa70b0c791b89dfe5aa31e6e19180605e7963f282c80?apiKey=da07e19f41d04fb48b0651b8deb55908&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/863d0b3b0d0baf403f7ffa70b0c791b89dfe5aa31e6e19180605e7963f282c80?apiKey=da07e19f41d04fb48b0651b8deb55908&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/863d0b3b0d0baf403f7ffa70b0c791b89dfe5aa31e6e19180605e7963f282c80?apiKey=da07e19f41d04fb48b0651b8deb55908&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/863d0b3b0d0baf403f7ffa70b0c791b89dfe5aa31e6e19180605e7963f282c80?apiKey=da07e19f41d04fb48b0651b8deb55908&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/863d0b3b0d0baf403f7ffa70b0c791b89dfe5aa31e6e19180605e7963f282c80?apiKey=da07e19f41d04fb48b0651b8deb55908&'
                              className='aspect-[3.33] w-full max-md:max-w-full'
                           />
                           <div className='mt-4 text-lg leading-loose   max-md:max-w-full'>
                              With a wealth of experience in website
                              design, I craft visually stunning and
                              highly functional sites that stand out.{" "}
                              <br />
                              <br />
                              My approach combines a keen eye for
                              detail with a deep understanding of user
                              experience, ensuring each design is not
                              only beautiful but also intuitive and
                              engaging. <br />
                              <br />I specialize in creating unique
                              digital experiences that reflect your
                              brand and captivate your audience. From
                              seamless navigation to responsive
                              layouts, every element is carefully
                              considered and meticulously executed.{" "}
                              <br />
                              <br />
                              Download my CV to see more of my work
                              and discover how I can help bring your
                              vision to life.
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='mt-20 flex grow  flex-col px-5   max-md:max-w-full'>
                  <div className='max-w-fit justify-center self-start whitespace-nowrap rounded-[800px] border border-white px-7 py-1.5 text-center'>
                     Knowledge
                  </div>
                  <div className='mt-4 text-4xl font-bold leading-snug'>
                     My Education
                  </div>
                  <div className='mt-12 flex flex-col rounded-2xl border border-solid border-neutral-600 bg-neutral-800 px-5 pt-5 max-md:mt-10 max-md:max-w-full max-md:pl-5'>
                     <div className='flex flex-col rounded-2xl bg-neutral-900 px-7 pb-px pt-4 max-md:max-w-full max-md:pl-5'>
                        <div className='flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap'>
                           <div className='text-2xl leading-9'>
                              Certificate Of Web
                              <br />
                              Design Training
                           </div>
                           <div className='my-auto text-lg leading-7 text-zinc-400'>
                              University of Canada
                           </div>
                        </div>
                        <div className='mb-3 justify-center self-end rounded-2xl px-5 py-1.5 text-sm font-bold leading-6'>
                           2010 - 2013
                        </div>
                     </div>
                  </div>
               </div>
            </Container>
         </section>
      </>
   );
};

export default About;
