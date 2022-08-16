import type { TypedUseSelectorHook } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { authApi } from "./api/auth";
import { rootReducer as reducer } from "./root.reducer";
import { userApi } from "./api/user";
import { contactApi } from "./api/contact";



const store = configureStore({
    devTools: process.env.NODE_ENV === "development",
    reducer,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), authApi.middleware, userApi.middleware, contactApi.middleware]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;