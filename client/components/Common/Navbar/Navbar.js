import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const menuItems = [
    {
        name: 'Home',
        path: '/',
        id: 1,
    },
    {
        name: 'Services',
        path: '/services',
        id: 2,
    },
    {
        name: 'Features',
        path: '/features',
        id: 3,
    },
    {
        name: 'Teams',
        path: '/teams',
        id: 4,
    },
    {
        name: 'About Us',
        path: '/about',
        id: 5,
    },
    {
        name: 'Contact',
        path: '/contact',
        id: 6,
    },
];

const Navbar = () => {
    const router = useRouter();
    const [isMenu, setIsMenu] = useState(false);
    const toggleMenu = () => {
        setIsMenu(!isMenu);
    };

    return (
        <header className="">
            <nav className="bg-slate-700/70 lg:w-full backdrop-blur-sm border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/assets/3dotit.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            3DotIt
                        </span>
                    </Link>
                    {/* <div className="flex items-center lg:order-2">
                            <a
                                href="#"
                                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                            >
                                Log in
                            </a>
                            <a
                                href="#"
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                            >
                                Get started
                            </a>
                            <button
                                data-collapse-toggle="mobile-menu-2"
                                type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <svg
                                    className="hidden w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div> */}
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul
                            className={`flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0`}
                        >
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={`${item.path}`}
                                        className={`${
                                            router.asPath === item.path
                                                ? 'border-b-2 border-orange-500 text-orange-500'
                                                : ''
                                        } block py-2 pr-4 pl-3 text-slate-900 bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white`}
                                        aria-current="page"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <span className="flex justify-between items-center gap-3">
                                    <Link href="/auth/login">
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-3">
                                            Login
                                        </button>
                                    </Link>
                                    <Link href="/auth/register">
                                        <button className="border border-blue-500 hover:bg-blue-600 text-slate-900 hover:text-white rounded py-2 px-3">
                                            Register
                                        </button>
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="block lg:hidden pb-2">
                        <label className="btn btn-circle swap swap-rotate">
                            <input type="checkbox" onChange={toggleMenu} />

                            <svg
                                className="swap-off fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 512 512"
                            >
                                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                            </svg>

                            <svg
                                className="swap-on fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 512 512"
                            >
                                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                            </svg>
                        </label>
                    </div>
                    {isMenu && (
                        <div
                            className={`flex justify-between border-t-2 border-orange-500  w-full mx-auto lg:hidden ${
                                isMenu
                                    ? 'animate-in slide-in-from-left duration-300'
                                    : 'animate-out slide-out-from-left duration-300'
                            } `}
                        >
                            <ul
                                className={`flex flex-col justify-center items-center w-full mx-auto font-medium`}
                            >
                                {menuItems.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={`${item.path}`}
                                            className={`${
                                                router.asPath === item.path
                                                    ? 'border-b-2 border-orange-500 text-orange-500'
                                                    : ''
                                            } block py-2 pr-4 pl-3 text-slate-900 bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white`}
                                            aria-current="page"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <span className="flex justify-between items-center gap-3">
                                        <Link href="/auth/login">
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-3">
                                                Login
                                            </button>
                                        </Link>
                                        <Link href="/auth/register">
                                            <button className="border border-blue-500 hover:bg-blue-600 text-slate-900 hover:text-white rounded py-2 px-3">
                                                Register
                                            </button>
                                        </Link>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
