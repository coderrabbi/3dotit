import axios from 'axios';
import { getAuth } from 'firebase/auth';

import { fireApp } from '../Firebase/Firebase.cofig';
const auth = getAuth(fireApp);
export const axiosPublic = axios.create({
    baseURL: process.env.api,
});
export const axiosAuth = axios.create({
    baseURL: process.env.api,
});
axiosAuth.interceptors.request.use(
    async (config) => {
        let user = await auth.currentUser;
        config.headers.token = user ? await user.getIdToken(true) : '';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
