import React from 'react';
import { Banner } from '../Common/Banner/Banner';

import { Services } from '../Common/Services/Services';

import Layout from '../Layout/Layout';

const HomeScreen = () => {
    return (
        <>
            <Layout>
                <Banner />
                <Services />
            </Layout>
        </>
    );
};

export default HomeScreen;
