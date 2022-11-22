import { TextField, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <>
      <Box sx={{ paddingTop: "2rem", marginBottom: "2rem" }}>
        <TextField
          placeholder="ค้นหาพันธบัตรรอง"
          fullWidth={true}
          sx={{ bgcolor: "white" }}
          InputProps={{
            startAdornment: <SearchIcon sx={{ marginRight: "0.5rem" }} />,
          }}
        />
      </Box>
    </>
  );
};
