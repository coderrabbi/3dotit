/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00072d',
                secondary: '#020e3b',
                dimWhite: 'rgba(255, 255, 255, 0.7)',
                dimBlue: 'rgba(9, 151, 124, 0.1)',
                primary_btn: '#feb400',
            },
        },
    },

    plugins: [require('tailwindcss-animate'), require('daisyui')],
};
