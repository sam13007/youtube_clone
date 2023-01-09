import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos)
    return (
      <Box sx={{ height: "95vh" }}>
        <Typography variant="h3" fontWeight="bold" textAlign="center">
          Loading....
        </Typography>
      </Box>
    );
  return (
    <Stack
      flexDirection={direction || "row"}
      flexWrap="wrap"
      p={2}
      gap={2}
      justifyContent="center"
      alignItems="center"
    >
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
