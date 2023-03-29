import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
