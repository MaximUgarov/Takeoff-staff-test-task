import type { Contact } from "types/contact";
import type { UseSearchConctactsOptions } from "types/useSearchContacts";
import { useMemo } from "react";



const useSearchConctacts = ({ contacts, query }: UseSearchConctactsOptions): Contact[] => {
    query = query.replace(/([^a-z0-9])/gi, "\\$1");
    const searchedData = useMemo(() => contacts.filter(contact => Object.values(contact)
        .some(field => new RegExp(`${query}`, "gi").test(String(field)))), [query, contacts]);
    return searchedData;
};

export default useSearchConctacts;