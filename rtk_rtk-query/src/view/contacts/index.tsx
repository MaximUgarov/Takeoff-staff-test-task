import type { FC } from "react";
import { useState } from "react";
import { Stack, Box, Button, Card } from "@mui/material";

import useSearchConctacts from "hooks/useSearchConctacts";
import { useGetContactsQuery } from "store/api/contact";
import ContactCreate from "./components/contactCreate";
import ContactSearchBar from "./components/contactSearchBar";
import ContactsList from "./components/contactsList";
import LoaderLayout from "components/layout/loader";



const Contacts: FC = () => {
    const [isOpenForm, setOpenForm] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    const { data: contacts = [], isLoading } = useGetContactsQuery();
    const contactsWithSearch = useSearchConctacts({ contacts, query });

    if (isLoading) return <LoaderLayout />;

    return <Box>
        <Card sx={{ m: 2 }}>
            <Stack m={2} spacing={2}>
                <ContactSearchBar query={query} setQuery={setQuery} />
                {isOpenForm ? <ContactCreate onCancelEdit={(): void => setOpenForm(false)} /> :
                    <Button
                        variant="contained"
                        onClick={(): void => setOpenForm(true)}
                        sx={{ maxWidth: "200px" }}>Create contact</Button>}
            </Stack>
        </Card>
        <ContactsList contacts={contactsWithSearch} isLoading={isLoading} />
    </Box >;
};

export default Contacts;