/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        api: 'http://localhost:5000/api',
    },
    reactStrictMode: true,
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
};

module.exports = nextConfig;
