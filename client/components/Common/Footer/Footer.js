import Link from 'next/link';
import React from 'react';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutube,
    FaLinkedin,
    FaGithubSquare,
} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="dark:bg-[#020e3b] bg-white p-10 relative z-50">
            {' '}
            <div className="dark:bg-[#020e3b]  text-primary dark:text-white">
                <div className="flex justify-start items-center gap-2">
                    <img src="/assets/3dotit.svg" alt="3dotit" className="h-12 w-12" />
                    <h3>3DotIt</h3>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-b-gray-300">
                    <div className="flex justify-start py-3 gap-3 items-center">
                        <Link href="/about" passHref>
                            About us
                        </Link>
                        <Link href="/support" passHref>
                            Support
                        </Link>
                        <Link href="/contact" passHref>
                            Contact
                        </Link>
                    </div>
                    <div className="flex justify-end items-center gap-3">
                        <FaFacebookSquare className="dark:text-white text-gray-700 text-2xl" />
                        <FaInstagramSquare className="dark:text-white text-gray-700 text-2xl" />
                        <FaYoutube className="dark:text-white text-gray-700 text-2xl" />
                        <FaLinkedin className="dark:text-white text-gray-700 text-2xl" />
                        <FaGithubSquare className="dark:text-white text-gray-700 text-2xl" />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h2 className=" text-primary dark:text-white py-10">
                    &copy; 2023 || All Right Reserved by <a href="https://3dotit">3Dotit</a>
                </h2>
            </div>
        </div>
    );
};

export default Footer;
