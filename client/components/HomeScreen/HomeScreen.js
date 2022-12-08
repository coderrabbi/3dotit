import React from 'react';

import Hero from '../Hero/Hero';

import Layout from '../Layout/Layout';
import OurWorkingProcess from '../OurWorkingProcess/OurWorkingProcess';

const HomeScreen = () => {
    return (
        <>
            <Layout>
                <Hero />
                <OurWorkingProcess />
            </Layout>
        </>
    );
};

export default HomeScreen;
