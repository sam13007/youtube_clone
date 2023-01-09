import React, { useEffect, useState } from "react";
import { SideBar, Videos } from "./";
import { fetchApi } from "../utils/fetchFromApi";
import { Stack, Box, Typography } from "@mui/material";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: { sx: 0, md: "1px solid #3d3d3d" },
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{ mt: 2 }}>
          Copyright JS Youtube 2023
        </Typography>
      </Box>

      <Box
        p={2}
        style={{
          overflowY: "auto",
          height: "95vh",
          flex: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {selectedCategory} <span style={{ color: "#F31503" }}> videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
