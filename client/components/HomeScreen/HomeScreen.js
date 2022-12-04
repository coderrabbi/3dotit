import React from 'react';
import { Banner } from '../Common/Banner/Banner';
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
            </Layout>
        </>
    );
};

export default HomeScreen;
