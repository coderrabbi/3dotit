import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import { FaPhoneVolume } from 'react-icons/fa';
import Loader from '../Loader/Loader';
import { motion } from 'framer-motion';
import Form from './Form';
const Contact = () => {
    return (
        <div className="dark:bg-primary bg-white px-10">
            <PageTitle>Contact Us</PageTitle>
            <div className="flex justify-around items-center pl-20">
                <motion.div
                    whileInView={{
                        x: 0,
                        transition: {
                            duration: 1,
                            type: 'spring',
                            stiffness: 50,
                        },
                    }}
                    initial={{ x: '-100%' }}
                    animate={{ x: '0' }}
                    className="flex-1"
                >
                    <h2 className="text-primary dark:text-white text-3xl font-bold">
                        Get in touch
                    </h2>
                    <p className="w-1/2 dark:text-white text-gray-700">
                        Want to get in touch? We'd love to hear from you. Hero's how you can reach
                        us...
                    </p>
                </motion.div>
                <motion.div
                    whileInView={{
                        x: 0,
                        transition: {
                            duration: 1,
                            type: 'spring',
                            stiffness: 50,
                        },
                    }}
                    initial={{ x: '110%' }}
                    animate={{ x: '100%' }}
                    className="flex-1 w-full h-[600px] bg-[url('/assets/contact.jpg')] bg-no-repeat right-0 rounded-l-[50%]"
                ></motion.div>
            </div>
            <div className="w-[80%] mx-auto flex justify-between gap-10  items-center -mt-12">
                <motion.div
                    whileInView={{
                        x: 0,
                        transition: {
                            duration: 1,
                            type: 'spring',
                        },
                    }}
                    initial={{ x: '-110%' }}
                    animate={{ x: '100%' }}
                    className="dark:text-white text-primary bg-primary/40 backdrop-blur dark:bg-white/20 dark:backdrop-blur w-[70%]  rounded p-10 "
                >
                    <div className="flex flex-col items-center justify-center">
                        <FaPhoneVolume className="text-4xl text-center" />
                        <h2 className="text-2xl font-semibold">Talk to Sales</h2>
                    </div>
                    <div className="text-justify">
                        <p>
                            Interested in HubSpot's software? Just pick up the phone to chat with a
                            member of our sales team.
                        </p>
                        <p>+8801775225448</p>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{
                        x: 0,
                        transition: {
                            duration: 1,
                            type: 'spring',
                        },
                    }}
                    initial={{ x: '-110%' }}
                    animate={{ x: '100%' }}
                    className="dark:text-white text-primary bg-primary/40 backdrop-blur dark:bg-white/20 dark:backdrop-blur w-[70%]  rounded p-10 "
                >
                    <div className="flex flex-col items-center justify-center">
                        <FaPhoneVolume className="text-4xl text-center" />
                        <h2 className="text-2xl font-semibold">Talk to Sales</h2>
                    </div>
                    <div className="text-justify">
                        <p>
                            Interested in HubSpot's software? Just pick up the phone to chat with a
                            member of our sales team.
                        </p>
                        <p>+8801775225448</p>
                    </div>
                </motion.div>
            </div>
            <div className="flex justify-between items-center mt-10 py-10">
                <div className="flex-1">
                    <h1 className="text-red-500 text-5xl">Need to Add a Section</h1>
                </div>
                <div className="flex-1">
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Contact;
