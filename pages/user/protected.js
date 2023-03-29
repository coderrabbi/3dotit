import axios from 'axios';
import { cookies, parseCookies } from 'nookies';
import React from 'react';
import PageTitle from '../../components/Common/PageTitle/PageTitle';

const protectedPage = () => {
    return (
        <div className="text-center">
            <PageTitle>This is a protected page</PageTitle>
            <p className="text-xl font-bold text-green-600 ">You have a secret key</p>
        </div>
    );
};

export async function getServerSideProps(contex) {
    const cookies = parseCookies(contex);
    console.log(cookies);
    const { data } = await axios.get(`${process.env.REACT_SERVER_URL}/api/private-route`, {
        headers: {
            token: cookies.token,
        },
    });
    console.log('private route props ===>', data);
    return {
        props: {},
    };
}

export default protectedPage;
