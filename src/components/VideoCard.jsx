import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { demoVideoUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{ maxWidth: "320px", borderRadius: "10px", boxShadow: "none" }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ height: "180px", width: "360px" }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", fontWeight: "bold" }}
          >
            {snippet?.title.slice(0, 50)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelTitle
          }
        >
          <Typography
            variant="subtitle2"
            sx={{ color: "gray", fontWeight: "bold" }}
          >
            {snippet?.channelTitle.slice(0, 50)}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
