import React from 'react';
import Layout from '../../components/Layout/Layout';

const register = () => {
    return (
        <>
            <div class="h-screen md:flex">
                <div class="relative overflow-hidden md:flex flex-1 w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center hidden">
                    <div>
                        <h1 class="text-white font-bold text-4xl font-sans">GoFinance</h1>
                        <p class="text-white mt-1">The most popular peer to peer lending at SEA</p>
                        <button
                            type="submit"
                            class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
                        >
                            Read More
                        </button>
                    </div>
                    <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
                <div class="flex md:w-full flex-1 justify-center py-10 items-center bg-white dark:bg-primary">
                    <form class="bg-white p-10 py-20 m-3 rounded dark:bg-white/20 backdrop-blur w-full">
                        <h1 class="text-gray-800 font-bold text-2xl mb-1 dark:text-primary_btn">
                            Hello Again!
                        </h1>
                        <p class="text-sm font-normal text-gray-600 mb-7 dark:text-white">
                            Welcome Back
                        </p>
                        <div class="flex items-center border-2 py-2 px-3 w-full rounded-2xl mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <input
                                class="pl-2 outline-none border-none bg-transparent"
                                type="text"
                                name=""
                                id=""
                                placeholder="Full name"
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                />
                            </svg>
                            <input
                                class="pl-2 outline-none border-none bg-transparent"
                                type="text"
                                name=""
                                id=""
                                placeholder="Username"
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                />
                            </svg>
                            <input
                                class="pl-2 outline-none border-none bg-transparent"
                                type="text"
                                name=""
                                id=""
                                placeholder="Email Address"
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <input
                                class="pl-2 outline-none border-none bg-transparent"
                                type="text"
                                name=""
                                id=""
                                placeholder="Password"
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div class="flex items-center border-2 py-2 my-3 px-3 rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <input
                                class="pl-2 outline-none border-none bg-transparent"
                                type="text"
                                name=""
                                id=""
                                placeholder="Confirm Password"
                                autoComplete="off"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            class="border border-primary_btn bg-primary_btn inline-block px-6 py-2.5  font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary_btn hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out dark:text-black text-black w-full my-3"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            Register
                        </button>
                        <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">
                            Forgot Password ?
                        </span>
                    </form>
                </div>
            </div>
        </>
    );
};

export default register;
