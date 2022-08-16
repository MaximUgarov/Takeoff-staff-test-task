import type { User, UserInititalState } from "types/user";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import localStorage from "service/localStorage";



const initialState: UserInititalState = {
    isAuth: false,
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: () => {
            localStorage.deleteAccessToken();
            return initialState;
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.isAuth = true;
            state.user = action.payload;
        }
    },
});

export default userSlice.reducer;