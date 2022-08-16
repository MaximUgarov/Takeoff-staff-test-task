import type { FC } from "react";
import { memo } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";



interface ContactSearchBarProps {
    query: string,
    setQuery: (query: string) => void
}

const ContactSearchBar: FC<ContactSearchBarProps> = memo(({ query, setQuery }) => (
    <TextField
        value={query}
        onChange={(e): void => setQuery(e.target.value)}
        InputProps={{ startAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment> }} />
));

export default ContactSearchBar;