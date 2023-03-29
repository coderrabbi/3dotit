import React from 'react';
import Footer from '../Common/Footer/Footer';
import Navbar from '../Common/Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="pt-[62px]">{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
