import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { Videos } from "./";
import { fetchApi } from "../utils/fetchFromApi";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const VideoDetail = () => {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState(null);

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((response) =>
      setVideoDetail(response.items[0])
    );
    fetchApi(`search?relatedToVideoId=${id}&part=snippet,id&type=video`).then(
      (response) => setRelatedVideo(response.items)
    );
  }, [id]);
  console.log(videoDetail);
  if (!videoDetail)
    return (
      <Box sx={{ height: "95vh" }}>
        <Typography variant="h3" fontWeight="bold" textAlign="center">
          Loading....
        </Typography>
      </Box>
    );

  const {
    snippet: { title, channelTitle, channelId },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              maxWidth: "100%",
              position: "sticky",
              top: "86px",
              pl: "10px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              playing={true}
            />
            <Typography fontWeight="bold" variant="h5" px={2} pt={2}>
              {title}
            </Typography>

            <Stack direction="row" justifyContent="space-between" p={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography
                  variant="body1"
                  color="#fff"
                  sx={{
                    opacity: 0.7,
                    border: "1px solid gray",
                    px: "6px",
                    py: "4px",
                    borderRadius: "10px",
                    backgroundColor: "gray",
                  }}
                >
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography
                  variant="body1"
                  color="#fff"
                  sx={{
                    opacity: 0.7,
                    border: "1px solid gray",
                    px: "6px",
                    py: "4px",
                    borderRadius: "10px",
                    backgroundColor: "gray",
                  }}
                >
                  <ThumbUpIcon sx={{ fontSize: 18, mr: "5px", pt: "2px" }} />
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={relatedVideo} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
