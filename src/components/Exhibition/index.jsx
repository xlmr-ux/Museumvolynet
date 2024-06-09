import React from "react";
import {
  AspectRatio,
  Box,
  Card,
  CardContent,
  CardOverflow,
  Divider,
  Typography,
} from "@mui/joy";

const Exhibition = ({ href, imgSrc, imgAlt, title, location, views, time }) => {
  return (
    <Card variant="outlined" href={href} component="a">
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={imgSrc}
            srcSet={`${imgSrc}&dpr=2 2x`}
            loading="lazy"
            alt={imgAlt}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">{title}</Typography>
        <Typography level="body-sm">{location}</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            fontWeight="md"
            textColor="text.secondary"
          >
            {views} views
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            fontWeight="md"
            textColor="text.secondary"
          >
            {time}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};

export default Exhibition;
