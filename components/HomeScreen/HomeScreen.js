import React from 'react';
import Features from '../Common/Features/Features';

import Hero from '../Hero/Hero';

import OurWorkingProcess from '../OurWorkingProcess/OurWorkingProcess';
import Services from '../Services/Services';

const HomeScreen = () => {
    return (
        <>
            <Hero />
            <Services />
            <Features />
            <OurWorkingProcess />
        </>
    );
};

export default HomeScreen;
