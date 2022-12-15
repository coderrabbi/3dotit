import React from 'react';

const PageTitle = ({ children }) => {
    return (
        <div className="py-5">
            <h2 className="text-primary dark:text-white text-5xl font-bold border-b-4 border-primary_btn w-fit mx-auto mb-10">
                {children}
            </h2>
        </div>
    );
};

export default PageTitle;
