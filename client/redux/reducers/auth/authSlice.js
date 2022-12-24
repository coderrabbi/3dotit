import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    email: '',
    userName: null,
    userId: null,
    userImage: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state = initialState, action) => {
            state.isLoggedIn = true;
            const { email, userName, userId, userImage } = action.payload;
            state.email = email;
            state.userName = userName;
            state.userId = userId;
            state.userImage = userImage;
        },
        userLoggedOut: (state = initialState, action) => {
            state.isLoggedIn = false;
            state.email = '';
            state.userName = '';
            state.userId = '';
            state.userImage = '';
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
