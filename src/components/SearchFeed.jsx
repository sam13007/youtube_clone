import React, { useEffect, useState } from "react";
import { Videos } from "./";
import { fetchApi } from "../utils/fetchFromApi";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  console.log(searchTerm);
  useEffect(() => {
    fetchApi(`search?q=${searchTerm}&part=snippet`).then((response) =>
      setVideos(response.items)
    );
  }, [searchTerm]);
  return (
    <Box
      p={2}
      style={{
        overflowY: "auto",
        height: "95vh",
        flex: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Search results for{" "}
        <span style={{ color: "#F31503", textTransform: "capitalize" }}>
          {searchTerm}
        </span>{" "}
        videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
