import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: undefined,
    accessToken: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
        },
        userLoggedOut: (state) => {
            state.user = undefined;
            state.accessToken = undefined;
        },
    },
});

export default authSlice.reducer;
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
