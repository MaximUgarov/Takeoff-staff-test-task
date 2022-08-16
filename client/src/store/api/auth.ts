import type { AuthResponse, AuthLogin } from "types/api";
import { createApi } from "@reduxjs/toolkit/query/react";

import { userApi } from "./user";
import baseQuery from "api";
import localStorage from "service/localStorage";



export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery,
    endpoints: builder => ({
        loginUser: builder.mutation<AuthResponse, AuthLogin>({
            query: body => ({ url: "login", method: "POST", body }),
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                const { data: { accessToken } } = await queryFulfilled;
                localStorage.setAccessToken(accessToken);
                dispatch(userApi.endpoints.getUser.initiate());
            },
        })
    })
});

export const { useLoginUserMutation } = authApi;