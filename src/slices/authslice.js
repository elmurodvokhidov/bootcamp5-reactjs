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
        loginStart: (state, action) => {
            state.isLoading = true;
        }
    }
});

export const {
    loginStart
} = AuthSlice.actions;
export default AuthSlice.reducer;