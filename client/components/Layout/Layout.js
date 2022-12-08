import React from 'react';
import Footer from '../Common/Footer/Footer';
import { MainHeader } from '../Common/Navbar/Header';
import Navbar from '../Common/Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
