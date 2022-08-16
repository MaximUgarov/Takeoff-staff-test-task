import type { CreateContact } from "types/contact";
import type { FC } from "react";
import type { RequestError } from "types/api";
import { Button, Stack, TextField, Typography } from "@mui/material";

import useForm from "hooks/useForm";
import { useCreateContactMutation } from "store/api/contact";



interface ContactCreateProps {
    onCancelEdit: () => void,
}

const ContactCreate: FC<ContactCreateProps> = ({ onCancelEdit }) => {

    const [createContact, { isLoading, isError, error }] = useCreateContactMutation();

    const { onChange, data: formData, onSubmitForm, resetValues } = useForm({
        initalValues: { email: "", name: "", number: "" } as CreateContact,
        validationShema: { email: { required: true, email: true }, name: { required: true }, number: { required: true } },
        onSubmit: (data: CreateContact) => {
            createContact(data).unwrap().then(() => resetValues());
        }
    });


    return (
        <form onSubmit={onSubmitForm}>
            <Stack spacing={2}>
                <TextField
                    id="email"
                    label="email"
                    type="email"
                    value={formData.email.value}
                    onChange={onChange}
                    fullWidth
                    error={!formData.email.isValid}
                    helperText={!formData.email.isValid && formData.email.errorText} />
                <TextField
                    id="name"
                    label="name"
                    type="name"
                    value={formData.name.value}
                    onChange={onChange}
                    fullWidth
                    error={!formData.name.isValid}
                    helperText={!formData.name.isValid && formData.name.errorText} />
                <TextField
                    id="number"
                    label="phone number"
                    type="phone"
                    value={formData.number.value}
                    onChange={onChange}
                    fullWidth
                    error={!formData.number.isValid}
                    helperText={!formData.number.isValid && formData.number.errorText} />
                {isError && <Typography>{(error as RequestError).data}</Typography>}
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="primary" sx={{ maxWidth: "100px" }} type="submit"
                        disabled={isLoading}>create</Button>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ maxWidth: "100px" }}
                        onClick={onCancelEdit}>cancel</Button>
                </Stack>
            </Stack>
        </form>
    );
};

export default ContactCreate;