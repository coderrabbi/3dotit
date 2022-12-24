import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <section className="bg-slate-100">
            <div className="container mx-auto py-32">
                <div>
                    <div className="bg-white relative shadow rounded-lg w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
                        <div className="flex justify-center">
                            <img
                                src={
                                    user?.photoURL
                                        ? user.photoURL
                                        : 'https://picsum.photos/200/300?random=1'
                                }
                                alt=""
                                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                            />
                        </div>

                        <div className="mt-16">
                            {user?.emailVerified === false ? (
                                <p className="text-sm text-red-500 text-center font-semibold">
                                    Please Varify your email
                                </p>
                            ) : (
                                <p className="text-sm text-green-500 text-center font-semibold">
                                    Email Verified
                                </p>
                            )}

                            <h1 className="font-bold text-center text-3xl text-gray-900">
                                {user?.displayName}
                            </h1>
                            <p className="text-center text-sm text-gray-400 font-medium">
                                {user?.email ? user.email : 'Email not found'}
                            </p>
                            <p className="text-center text-sm text-gray-400 font-medium">
                                <span>
                                    <b>Account Created At: {user?.metadata.creationTime}</b>
                                </span>
                            </p>

                            <div className="my-5 px-6 py-3">
                                <button className="text-gray-200 block w-full rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">
                                    <span className="font-bold">edit Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default profile;
