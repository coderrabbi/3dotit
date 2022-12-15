import Link from 'next/link';
import React from 'react';

const Card = ({ image }) => {
    return (
        // <div className="h-64 w-54 relative transition-all duration-500 rounded-lg shadow-lg group">
        //     <div className="h-[75%] absolute transition-all duration-500 ">
        //         <img src={image} alt="" />
        //     </div>

        //     <div className="w-full flex absolute gap-4 flex-col bg-slate-200 h-[85%] bottom-0 rounded-md transition-all duration-500 p-4 group-hover:translate-y-[100%]">
        //         <h2 className="text-2xl font-bold">Card Title</h2>
        //         <p className="text-[1rem]">Text for the body text</p>
        //     </div>
        // </div>
        <div className="card backdrop-blur-md bg-primary/30 md:w-[350px] md:h-[400px] h-[300px] flex flex-col md:gap-4 dark:bg-primary/10 my-10 text-primary dark:text-white">
            <img src={image} alt="" className="h-1/2" />
            <h3>Card Title</h3>
            <p>card description</p>
            <Link href="/" passHref className="text-blue-500">
                Read More
            </Link>
        </div>
    );
};

export default Card;
