import type { FC } from "react";
import type { Contact } from "types/contact";
import { Stack, Typography } from "@mui/material";
import { memo } from "react";

import ContactItem from "./contactItem";
import LoaderLayout from "components/layout/loader";



interface ContactsListProps {
    contacts: Contact[] | undefined,
    isLoading: boolean,
}

const ContactsList: FC<ContactsListProps> = memo(({ contacts = [], isLoading }) =>
    <Stack m={2} spacing={2}>{
        isLoading ? <LoaderLayout /> :
            contacts.length ? contacts.map(contact => <ContactItem key={contact.id} contact={contact} />) :
                <Typography>Contacts list is empty</Typography>
    }</Stack>);

export default ContactsList;