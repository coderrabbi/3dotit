import React from 'react';
import PageTitle from '../components/Common/PageTitle/PageTitle';
import Card from '../components/Services/Card';

const services = () => {
    return (
        <div className="dark:bg-primary bg-white">
            <PageTitle>Our Services</PageTitle>
            <div className="px-10 grid grid-cols-3 gap-4">
                <Card image="/assets/3Dotit_instant_support.svg" />
                <Card image="/assets/3Dotit_agreement.svg" />
                <Card image="/assets/3Dotit_work_togather.svg" />
            </div>
        </div>
    );
};

export default services;
