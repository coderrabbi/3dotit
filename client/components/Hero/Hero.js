import React, { useEffect, useState } from 'react';
import data from '../../assets/hero.json';
import Lottie from 'lottie-react';
// import '@dotlottie/player-component';
import { PopupButton, PopupWidget } from 'react-calendly';
const Hero = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);

        return () => {
            setMounted(false);
        };
    });
    return (
        <section className="bg-white dark:bg-primary px-10 relative mb-10 pb-10">
            <div className="flex justify-between items-center">
                {/* <div className="gradient-hero" /> */}
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
                    <div>
                        <form>
                            <span className="flex justify-start items-center cursor-pointer">
                                <input
                                    type="text"
                                    className="px-3 py-2 rounded-l dark:bg-white bg-primary text-white dark:text-primary appearance-none focus:outline-none"
                                />
                                <button className="text-[#00072d] bg-[#feb400] px-3 py-2 rounded-r">
                                    Subscribe
                                </button>
                            </span>
                        </form>
                    </div>
                    {mounted && (
                        <div>
                            <PopupWidget
                                url="https://calendly.com/3dotit"
                                rootElement={document.getElementById('__next')}
                                text="Schedule time with us"
                                textColor="#00072d"
                                color="#feb400"
                            />
                            <PopupButton
                                url="https://calendly.com/3dotit"
                                rootElement={document.getElementById('__next')}
                                text="Schedule time with us"
                                className="text-[#00072d] bg-[#feb400] px-3 py-2 rounded"
                            />
                        </div>
                    )}
                </div>

                <Lottie animationData={data} className="w-[50%]" />
            </div>
        </section>
    );
};

export default Hero;
