import type { FC } from "react";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { useAppDispatch, useAppSelector } from "store";
import { userSlice } from "store/reducers/user";
import { userSelector } from "store/selectors/user";



const Header: FC = () => {
    const user = useAppSelector(userSelector);
    const dispatch = useAppDispatch();

    const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

    const onLogout = () => dispatch(userSlice.actions.logout());

    return (<>
        <AppBar position="fixed">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>{user?.email}</Typography>
                <LogoutIcon onClick={() => onLogout()} />
            </Toolbar>
        </AppBar>
        <Offset />
    </>);
};

export default Header;