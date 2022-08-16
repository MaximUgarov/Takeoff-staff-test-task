import { lazy } from "react";

const Authorization = lazy(() => import("view/auth"));
const Contacts = lazy(() => import("view/contacts"));


export default [{
    path: "/",
    Element: Authorization,
    isNeedAuth: false
},
{
    path: "contacts",
    Element: Contacts,
    isNeedAuth: true
}];