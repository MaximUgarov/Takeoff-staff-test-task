
import type { FC } from "react";
import type { AuthLogin, RequestError } from "types/api";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useForm from "hooks/useForm";
import { useAppSelector } from "store";
import { useLoginUserMutation } from "store/api/auth";
import { authSelector } from "store/selectors/auth";



const Authorization: FC = () => {

    const isAuth = useAppSelector(authSelector);
    const navigate = useNavigate();

    const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

    useEffect(() => { isAuth && navigate("/contacts"); }, [isAuth, navigate]);

    const { onChange, data: formData, onSubmitForm } = useForm({
        initalValues: { email: "", password: "" } as AuthLogin,
        validationShema: { email: { required: true, email: true }, password: { required: true, minLength: 8, maxLength: 12 } },
        onSubmit: loginUser
    });

    return (
        <Grid
            container
            spacing={0}
            style={{ height: "100vh", alignItems: "center", justifyContent: "center" }}
        >
            <Card sx={{ maxWidth: 450, width: 1 }}>
                <form onSubmit={e => onSubmitForm(e)}>
                    <Stack m={2} spacing={3} sx={{ alignItems: "center" }}>
                        <Typography>Authorization</Typography>
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
                            id="password"
                            label="password"
                            type="password"
                            value={formData.password.value}
                            onChange={onChange}
                            fullWidth
                            error={!formData.password.isValid}
                            helperText={!formData.password.isValid && formData.password.errorText} />
                        {isError && <Typography>{(error as RequestError).data}</Typography>}
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{ textTransform: "none", maxWidth: "100px" }}
                            type="submit"
                            disabled={isLoading}>Login</Button>
                    </Stack>
                </form>
            </Card>
        </Grid >
    );
};

export default Authorization;