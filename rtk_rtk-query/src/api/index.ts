import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import localStorage from "service/localStorage";
import config from "../constants/config";



const baseQuery = fetchBaseQuery({
    baseUrl: config.baseUrl,
    prepareHeaders: headers => {
        const accessToken = localStorage.getAccessToken();
        headers.set("content-type", "application/json");
        accessToken && headers.set("Authorization", `Bearer ${accessToken}`);
        return headers;
    },
    credentials: "include",
});

export default baseQuery;