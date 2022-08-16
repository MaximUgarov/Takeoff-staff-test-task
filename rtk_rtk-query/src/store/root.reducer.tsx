import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./api/auth";
import { contactApi } from "./api/contact";
import { userApi } from "./api/user";
import userSlice from "./reducers/user";



export const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    user: userSlice
});

