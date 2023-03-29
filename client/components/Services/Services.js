import Image from "next/image";
import React from "react";
import PageTitle from "../Common/PageTitle/PageTitle";
import Card from "./Card";
import Service from "./Service.js";

const Services = () => {
  return (
    <div className="dark:bg-primary bg-white  flex flex-col  ">
      <PageTitle>Our Services</PageTitle>
      <div className="px-10 grid md:grid-cols-3  relative z-[2]">
        <Card image="/assets/3Dotit_instant_support.svg" />
        <Card image="/assets/3Dotit_agreement.svg" />
        <Card image="/assets/3Dotit_work_togather.svg" />
        <Card image="/assets/3Dotit_work_togather.svg" />
        <Card image="/assets/3Dotit_work_togather.svg" />
        <Card image="/assets/3Dotit_work_togather.svg" />
        <div className="absolute max-w-[500px] max-h-[500px] bottom-0 z-[-1] right-0">
          <Image height={600} width={600} src="/assets/circleW.png" alt="" />
        </div>
        <div className="absolute z-[-2] w-[30%] h-[69%] bottom-0 right-0 bg-[#810ca89b] blur-[120px] " />
      </div>
    </div>
  );
};

export default Services;
