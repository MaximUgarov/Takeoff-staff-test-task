import { Box, CircularProgress } from "@mui/material";
import type { FC } from "react";

const LoaderLayout: FC = () => (<Box sx={{ display: "flex", justifyContent: "center" }}> <CircularProgress size={"8%"} /></Box >);

export default LoaderLayout;