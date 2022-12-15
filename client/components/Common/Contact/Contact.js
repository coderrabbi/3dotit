import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import { FaPhoneVolume } from 'react-icons/fa';
import Loader from '../Loader/Loader';
const Contact = () => {
    return (
        <div className="dark:bg-primary bg-white">
            <PageTitle>Contact Us</PageTitle>
            <div className="flex justify-around items-center pl-20">
                <div className="flex-1">
                    <h2 className="text-primary dark:text-white text-3xl font-bold">
                        Get in touch
                    </h2>
                    <p className="w-1/2 dark:text-white text-gray-700">
                        Want to get in touch? We'd love to hear from you. Hero's how you can reach
                        us...
                    </p>
                </div>
                <div className="flex-1 w-full h-[500px] bg-[url('/assets/contact.jpg')] bg-no-repeat bg-right rounded-l-[50%]"></div>
            </div>
            <div className="w-[80%] mx-auto flex justify-between gap-10  items-center -mt-12">
                <div className="dark:text-white text-primary  bg-primary/40 backdrop-blur dark:bg-primary/20 dark:backdrop-blur-md w-[70%] rounded p-10 ">
                    <FaPhoneVolume />
                    <h2>Talk to Sales</h2>
                    <p>
                        Interested in HubSpot's software? Just pick up the phone to chat with a
                        member of our sales team.
                    </p>
                    <p>+8801775225448</p>
                </div>
                <div className="dark:text-white text-primary  bg-primary/40 backdrop-blur dark:bg-primary/20 dark:backdrop-blur-md w-[70%] rounded p-10 ">
                    <FaPhoneVolume />
                    <h2>Talk to Sales</h2>
                    <p>
                        Interested in HubSpot's software? Just pick up the phone to chat with a
                        member of our sales team.
                    </p>
                    <p>+8801775225448</p>
                </div>
            </div>
            <Loader />
        </div>
    );
};

export default Contact;
