import type { FC } from "react";
import type { Contact, CreateContact } from "types/contact";
import type { RequestError } from "types/api";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

import useForm from "hooks/useForm";
import { useDeleteContactMutation, useUpdateContactMutation } from "store/api/contact";
import { Stack } from "@mui/system";



interface ContactItemProps {
    contact: Contact,
}

const ContactItem: FC<ContactItemProps> = ({ contact }) => {
    const { id, email, name, number } = contact;
    const [editContact, { isLoading, isError, error }] = useUpdateContactMutation();
    const [deleteContact] = useDeleteContactMutation();

    const [isEditing, setEditing] = useState<boolean>(false);

    const { onChange, data: formData, onSubmitForm } = useForm({
        initalValues: { email, name, number } as CreateContact,
        validationShema: { email: { required: true, email: true }, name: { required: true }, number: { required: true, } },
        onSubmit: (data: CreateContact) => {
            editContact({ id, body: data }).unwrap().then(() => setEditing(false));
        }
    });


    return (<Card sx={{ p: 3 }}>
        <Grid>
            <form onSubmit={onSubmitForm}>
                {isEditing ?
                    <Stack spacing={2}>
                        <TextField
                            id="email"
                            label="email"
                            type="email"
                            value={formData.email.value}
                            error={!formData.email.isValid}
                            helperText={!formData.email.isValid && formData.email.errorText}
                            onChange={onChange}
                            fullWidth />
                        <TextField
                            id="name"
                            label="name"
                            type="name"
                            value={formData.name.value}
                            error={!formData.name.isValid}
                            helperText={!formData.name.isValid && formData.name.errorText}
                            onChange={onChange}
                            fullWidth />
                        <TextField
                            id="number"
                            label="phone number"
                            type="phone"
                            value={formData.number.value}
                            error={!formData.number.isValid}
                            helperText={!formData.number.isValid && formData.number.errorText}
                            onChange={onChange}
                            fullWidth />
                        {isError && <Typography>{(error as RequestError).data}</Typography>}
                    </Stack> : <Stack spacing={1}>
                        <Typography>{contact.email}</Typography>
                        <Typography>{contact.name}</Typography>
                        <Typography>{contact.number}</Typography>
                    </Stack>
                }
                <Stack direction="row" spacing={1} mt={2}>
                    {isEditing && <Button variant="contained" type="submit" disabled={isLoading}>save</Button>}
                    <Button variant="contained" onClick={() => setEditing(!isEditing)}>{!isEditing ? "edit" : "cancel"}</Button>
                    {!isEditing && <Button variant="contained" onClick={() => deleteContact(contact.id)}>delete</Button>}
                </Stack>
            </form>
        </Grid>
    </Card >);
};

export default ContactItem;