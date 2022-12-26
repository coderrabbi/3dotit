import React from "react";
import PageTitle from "../components/Common/PageTitle/PageTitle";
import Card from "../components/Services/Card";

import Image from "next/image";
const services = () => {
  return (
    <div className="dark:bg-primary bg-white  flex flex-col  ">
      <PageTitle>Our Services</PageTitle>
      <div className="px-10 grid grid-cols-3 gap-4 relative z-[2]">
        <Card image="/assets/3Dotit_instant_support.svg" />
        <Card image="/assets/3Dotit_agreement.svg" />
        <Card image="/assets/3Dotit_work_togather.svg" />
        <div className="absolute max-w-[500px] max-h-[500px] bottom-0 z-[-1] right-0">
          <Image height={500} width={500} src="/assets/circleW.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default services;
