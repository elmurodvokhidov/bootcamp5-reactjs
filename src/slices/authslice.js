import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isLogin: false,
    isError: null,
    user: null,
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.isLogin = true;
            state.isError = null;
            state.user = action.payload;
            localStorage.setItem("token", action.payload.token);
        },
        loginError: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        },
        userLogout: (state) => {
            state.isLogin = false;
            state.user = null;
            localStorage.removeItem("token");
        }
    }
});

export const {
    loginStart,
    loginSuccess,
    loginError,
    userLogout
} = AuthSlice.actions;
export default AuthSlice.reducer;