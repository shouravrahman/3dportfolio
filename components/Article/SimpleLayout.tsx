import { Container } from "@/components/Container";

export function SimpleLayout({
   title,
   intro,
   children,
}: {
   title: string;
   intro?: string;
   children?: React.ReactNode;
}) {
   return (
      <div className='my-24 c-space  text-pretty max-w-7xl mx-auto'>
         <header className='max-w-3xl '>
            <h1 className='text-3xl md:text-4xl text-pretty font-bold tracking-tight  sm:text-5xl'>
               {title}
            </h1>
            <p className='mt-4 md:mt-6 text-pretty text-base'>{intro}</p>
         </header>
         {children && <div className='lg:mt-16 mt-10'>{children}</div>}
      </div>
   );
}
