import React from 'react';
import Layout from '../components/Layout/Layout';

const about = () => {
    return (
        <Layout>
            <div className="h-[100vh] bg-[#00072d] relative text-center">
                <div className="gradient-03" />
                <h1 className="text-white">About US</h1>
                <button className="px-3 py-2 rounded bg-[#feb400] text-black">Register</button>
            </div>
        </Layout>
    );
};

export default about;
