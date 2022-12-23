import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
const register = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [passShow, setPassShow] = useState(false);

    const [isConfirmPassShow, setIsConfirmPassShow] = useState(false);
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleConfirmPassShow = () => {
        setIsConfirmPassShow(!isConfirmPassShow);
    };
    const handlePassShow = () => {
        setPassShow(!passShow);
    };
    const registerUser = (e) => {
        e.preventDefault();
        if (password !== cPassword) {
            setErrorMessage('Passwords do not match');
        }
        if (!fullName && !email && !password) {
            setErrorMessage('Please fill in all fields');
        } else if (!fullName) {
            setErrorMessage('Please fill in your name');
        } else if (!email) {
            toast.error('Please fill in your email');
        } else if (!password) {
            setErrorMessage('Please fill in your password');
        }
        if (password === cPassword && fullName && email && password) {
            setIsLoading(true);
            createUser(email, password)
                .then(() => {
                    updateUserProfile({ displayName: fullName, photoURL }).then(() => {
                        // Profile updated!
                        setIsLoading(false);
                        setSuccessMessage('Registration successful');
                        handleEmailVerification();
                        setSuccessMessage('Please verify your email address.');
                    });
                })
                .catch((error) => {
                    const message = error.message;
                    setErrorMessage(message);
                    setIsLoading(false);
                });
        }
    };
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
                    <form
                        class="bg-white p-10 py-20 m-3 rounded dark:bg-white/20 backdrop-blur w-full"
                        onSubmit={registerUser}
                    >
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
                                class="pl-2 w-full outline-none border-none bg-transparent"
                                type="text"
                                name=""
                                id=""
                                placeholder="Full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
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
                                class="pl-2 w-full outline-none border-none bg-transparent"
                                type="text"
                                name=""
                                id=""
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div class="flex items-center relative border-2 py-2 px-3 rounded-2xl">
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
                                class="pl-2 w-full outline-none border-none bg-transparent"
                                type={`${passShow ? 'text' : 'password'}`}
                                name=""
                                id=""
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="off"
                                required
                            />
                            <div className="absolute top-3 right-5">
                                {!passShow ? (
                                    <BsFillEyeSlashFill
                                        className="cursor-pointer"
                                        onClick={handlePassShow}
                                    />
                                ) : (
                                    <BsFillEyeFill
                                        className="cursor-pointer"
                                        onClick={handlePassShow}
                                    />
                                )}
                            </div>
                        </div>
                        <div class="flex relative items-center border-2 py-2 my-3 px-3 rounded-2xl">
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
                                class="pl-2 w-full outline-none border-none bg-transparent"
                                type={`${isConfirmPassShow ? 'text' : 'password'}`}
                                name=""
                                id=""
                                placeholder="Confirm Password"
                                value={cPassword}
                                onChange={(e) => setCPassword(e.target.value)}
                                autoComplete="off"
                                required
                            />
                            <div className="absolute top-3 right-5">
                                {!isConfirmPassShow ? (
                                    <BsFillEyeSlashFill
                                        className="cursor-pointer"
                                        onClick={handleConfirmPassShow}
                                    />
                                ) : (
                                    <BsFillEyeFill
                                        className="cursor-pointer"
                                        onClick={handleConfirmPassShow}
                                    />
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="border border-primary_btn bg-primary_btn inline-block px-6 py-2.5  font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary_btn hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out dark:text-black text-black w-full my-3"
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
