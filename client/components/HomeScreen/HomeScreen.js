import React from "react";
import Footer from "../Common/Footer/Footer";
import { MainHeader } from "../Common/Navbar/Header";
import { Services } from "../Common/Services/Services";
import Hero from "../Hero/Hero";
import Layout from "../Layout/Layout";

const HomeScreen = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Services />
      </Layout>
    </>
  );
};

export default HomeScreen;
