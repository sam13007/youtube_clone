import React from "react";

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      p={2}
      alignItems="center"
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "#000",
        justifyContent: "space-between",
        borderBottom: "1px solid #3d3d3d",
      }}
    >
      <Link to="/">
        <img src={logo} alt="Logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
