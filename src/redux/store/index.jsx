import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "../slice/MainSlice";

export const store = configureStore({
    reducer: MainSlice
});