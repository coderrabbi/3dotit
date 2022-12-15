import React from 'react';
import PageTitle from '../Common/PageTitle/PageTitle';
import Card from './Card';

const Services = () => {
    return (
        <div className="dark:bg-primary bg-white py-10 ">
            <PageTitle>Our Services</PageTitle>
            <div className="md:px-10 px-5 grid md:grid-cols-3 grid-flow-row md:gap-4">
                <Card image="/assets/3Dotit_instant_support.svg" />
                <Card image="/assets/3Dotit_agreement.svg" />
                <Card image="/assets/3Dotit_work_togather.svg" />
                <Card image="/assets/3Dotit_work_togather.svg" />
            </div>
        </div>
    );
};

export default Services;
