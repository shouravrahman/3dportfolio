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
      <div className='mt-32 p-5 mb-20 max-w-7xl mx-auto'>
         <header className='max-w-3xl '>
            <h1 className='text-4xl font-bold tracking-tight  sm:text-5xl'>
               {title}
            </h1>
            <p className='mt-6 text-pretty text-base'>{intro}</p>
         </header>
         {children && <div className='mt-16 sm:mt-20'>{children}</div>}
      </div>
   );
}
