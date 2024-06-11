import React, { useState } from "react";
import {
  AspectRatio,
  Stack,
  Card,
  CardContent,
  CardOverflow,
  Chip,
  Divider,
  Typography,
  Button,
  Sheet,
} from "@mui/joy";
import "./index.css";

const Exhibition = ({
  href,
  imgSrc,
  imgAlt,
  title,
  location,
  views,
  time,
  description,
  isAR = true,
}) => {
  return (
    <div className="flip-card">
      <div className={`flip-card flip-card-inner`}>
        <Card
          className="flip-card-front"
          variant="outlined"
          sx={{
            opacity: 1,
            transition: "all 0.3s cubic-bezier( 0.39, 0.575, 0.565, 1 )",
            position: "relative",
          }}
        >
          <CardOverflow sx={{ display: "grid" }}>
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
          <CardOverflow variant="soft" sx={{ bgcolor: "background.level2" }}>
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

              {isAR && (
                <Chip
                  size="sm"
                  variant="soft"
                  sx={{ border: "2px solid #9ad5b7", ml: "auto" }}
                  color="warning"
                >
                  AR
                </Chip>
              )}
            </CardContent>
          </CardOverflow>
        </Card>

        <Sheet
          variant="outlined"
          className="flip-card-back"
          sx={{
            position: "absolute",
            borderRadius: "md",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: 1,
          }}
        >
          <Stack gap={1}>
            <Typography level="title-lg">{title}</Typography>
            <Typography level="body-md">{location}</Typography>
            <Typography level="body-sm">{description}</Typography>
            <Button href={href} sx={{ zIndex: 10000 }} component="a">
              AR
            </Button>
          </Stack>
        </Sheet>
      </div>
    </div>
  );
};

export default Exhibition;
