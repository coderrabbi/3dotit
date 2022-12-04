import React from 'react';
import { Banner } from '../Common/Banner/Banner';
import { Faq } from '../Common/FAQ/FAQ';
import { Features } from '../Common/Features/Features';

import { Services } from '../Common/Services/Services';

import Layout from '../Layout/Layout';

const HomeScreen = () => {
    return (
        <>
            <Layout>
                <Banner />
                <Services />
                <Features />
                <Faq />
            </Layout>
        </>
    );
};

export default HomeScreen;
