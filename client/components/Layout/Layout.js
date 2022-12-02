import React from 'react';
import Footer from '../Common/Footer/Footer';
import { MainHeader } from '../Common/Navbar/Header';

const Layout = ({ children }) => {
    return (
        <>
            <MainHeader />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
