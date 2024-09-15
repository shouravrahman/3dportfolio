import React from "react";

interface ISectionHeaderProps {
    title: string;
    subtitle: string;
}

const SectionHeader = ({ title, subtitle }: ISectionHeaderProps) => {
    return (
        <div className='my-10 flex max-w-screen-lg  flex-col self-center px-10 text-center text-yellow-600 max-md:px-5'>
            <div className='self-center text-2xl font-medium leading-7'>
                {title}
            </div>
            <div className='text-7xl font-bold  max-md:mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[49px] lg:mt-10'>
                {subtitle}
            </div>
            <hr className='mx-auto my-4 w-[98%] border-separate border-2 border-dashed border-yellow-200 md:my-5' />
        </div>
    );
};

export default SectionHeader;
