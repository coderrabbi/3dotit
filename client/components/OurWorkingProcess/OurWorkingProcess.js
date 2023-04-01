import React from "react";
import PageTitle from "../Common/PageTitle/PageTitle";

const OurWorkingProcess = ({ styles }) => {
  return (
    <div>
      <div>
        <div
          id="#work"
          className=" work dark:text-white text-primary  py-8  relative "
        >
          <div className="absolute z-[1] w-[40%] h-[29%] top-0 left-0 bg-[#810ca89b] blur-[100px] " />
          <div className=" hero__patarn  absolute top-0 right-0 left-0 z-2"></div>
          <PageTitle>our working process</PageTitle>

          <div className="container z-[10] relative mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 text-primary dark:text-white">
              <p className="ml-2 text-secondary dark:text-white uppercase tracking-loose">
                Working Process
              </p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Working Process of Fest
              </p>
              <p className="text-sm md:text-base mb-4">
                Here’s your guide to the tech fest 2021 process. Go through all
                the steps to know the exact process of the fest.
              </p>
              <a
                href="#"
                className="bg-transparent dark:bg-primary_btn mr-auto hover:bg-secondary text-secondary hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-secondary hover:border-transparent"
              >
                Explore Now
              </a>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 text-primary dark:text-white  relative z-[10]">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2 border-yellow-555 absolute left-[50%]   h-full rounded-sm"></div>
                  <div className="border-2 border-yellow-555 absolute left-[50%]   h-full rounded-sm"></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-secondary dark:text-white">
                        1-6 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Registration
                      </h4>
                      <p className="text-sm md:text-base leading-snug  text-opacity-100">
                        Pick your favourite event(s) and register in that event
                        by filling the form corresponding to that event. Its
                        that easy
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-secondary dark:text-white">
                        6-9 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Participation
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-opacity-100">
                        Participate online. The links for your registered events
                        will be sent to you via email and whatsapp groups. Use
                        those links and show your talent.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-secondary dark:text-white">
                        {" "}
                        10 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Result Declaration
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-opacity-100">
                        The ultimate genius will be revealed by our judging
                        panel on 10th May, 2021 and the resukts will be
                        announced on the whatsapp groups and will be mailed to
                        you.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-secondary dark:text-white">
                        12 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Prize Distribution
                      </h4>
                      <p className="text-sm md:text-base leading-snug  text-opacity-100">
                        The winners will be contacted by our team for their
                        addresses and the winning goodies will be sent at their
                        addresses.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                />
              </div>
            </div>
            {/* <div className="absolute z-[0] w-[20%] h-[35%] top-0 pink__gradient" />
                        <div className="absolute z-[1] w-[60%] h-[80%] rounded-full white__gradient bottom-40" />
                        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkingProcess;
