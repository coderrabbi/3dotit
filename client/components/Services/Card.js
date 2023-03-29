import Image from "next/image";
import Link from "next/link";
import React from "react";
import webDesign from "../../assets/web-design.png";
const Card = ({ image }) => {
  return (
    <div className="dark:bg-white/60 bg-primary/80 backdrop-blur-sm md:border-l border-b text-center border-primary_btn p-7 hover:transform">
      <div className="text-white hover:transform flex flex-col gap-3  dark:text-primary">
        <div className="text-center">
          {" "}
          <Image
            src={webDesign}
            alt="web-design"
            className="w-[80px] mx-auto hover:scale-[1.1] transition ease-in-out duration-700 "
          />
        </div>
        <h3 className="text-2xl font-semibold">Card Title</h3>
        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nihil
          earum pariatur corrupti harum consequatur ad. Adipisci magnam animi
          esse.
        </p>

        <div className="hover:scale-[1.1] transition ease-in-out duration-700">
          <Link
            href="/"
            passHref
            className="text-white px-4 py-2  bg-primary_btn rounded-md"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
    // <div className="card backdrop-blur-md bg-red-500/30  flex flex-col md:gap-4 dark:bg-primary/10 my-10 text-primary dark:text-white">
    //   <h3>Card Title</h3>
    //   <p>card description</p>
    //   <Link href="/" passHref className="text-blue-500">
    //     Read More
    //   </Link>
    // </div>
  );
};

export default Card;
