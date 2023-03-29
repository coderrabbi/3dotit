import React from 'react';
import { motion } from 'framer-motion';

const PageTitle = ({ children }) => {
    return (
        <motion.div initial={{ x: '-100%' }} animate={{ x: '0' }} transition={100} className="py-5">
            <h2 className="text-primary dark:text-white text-5xl font-bold border-b-4 border-primary_btn w-fit mx-auto mb-10">
                {children}
            </h2>
        </motion.div>
    );
};

export default PageTitle;
