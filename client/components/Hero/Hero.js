import React from 'react';
import data from '../../assets/Hero-editor.json';
import Lottie from 'lottie-react';
const Hero = () => {
    return (
        <section className="bg-white dark:bg-primary px-10 relative z-10">
            <div className="flex justify-between items-center">
                <div className=" flex flex-col flex-1 gap-3">
                    <h2 className="text-6xl font-bold text-primary dark:text-white">
                        Web Service <span className="text-primary_btn">Solution</span>
                    </h2>
                    <p className="text-primary dark:text-white">
                        Increase learner engagement & knowledge retention in higher education and
                        corporate training settings
                    </p>
                    <h3 className="text-primary dark:text-white text-xl font-semibold">
                        Join free now
                    </h3>
                    <h2 className="text-red-500 text-6xl ">Add Calendly</h2>
                    <h2 className="text-6xl font-bold text-primary dark:text-white">
                        Web Service <span className="text-primary_btn">Solution</span>
                    </h2>
                    <p className="text-primary dark:text-white">
                        Increase learner engagement & knowledge retention in higher education and
                        corporate training settings
                    </p>
                    <h3 className="text-primary dark:text-white text-xl font-semibold">
                        Join free now
                    </h3>
                    <h2 className="text-red-500 text-6xl ">Add Calendly</h2>
                </div>
                <div className=" flex-1 relative">
                    <Lottie animationData={data} />
                    <div className="gradient-hero" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
