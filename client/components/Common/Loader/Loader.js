import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-300">
            {/* <div class="flex space-x-2 animate-pulse">
                <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
            </div> */}
            <div class="snippet relative w-full" data-title=".dot-bricks">
                <div class="stage">
                    <div class="dot-bricks"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
