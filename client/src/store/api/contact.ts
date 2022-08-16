import type { Contact, CreateContact, UpdateContact } from "types/contact";
import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery from "api";



export const contactApi = createApi({
    reducerPath: "contactApi",
    tagTypes: ["Contact"],
    baseQuery,
    endpoints: builder => ({
        getContacts: builder.query<Contact[], void>({
            query: () => "/660/contacts",
            providesTags: ["Contact"]
        }),
        createContact: builder.mutation<Contact, CreateContact>({
            query: body => ({ url: "/660/contacts", method: "POST", body }),
            invalidatesTags: ["Contact"]
        }),
        updateContact: builder.mutation<void, UpdateContact>({
            query: ({ id, body }) => ({ url: `/660/contacts/${id}`, method: "PUT", body }),
            invalidatesTags: ["Contact"]
        }),
        deleteContact: builder.mutation<void, number>({
            query: id => ({ url: `/660/contacts/${id}`, method: "DELETE" }),
            invalidatesTags: ["Contact"]
        })
    })
});

export const { useGetContactsQuery, useCreateContactMutation, useUpdateContactMutation, useDeleteContactMutation } = contactApi;