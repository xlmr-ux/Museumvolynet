import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ARCanvas, ARMarker } from "../../components/ar";
import { useGLTF } from "@react-three/drei";
import { Text, Billboard, Line } from "@react-three/drei";
import ElementPointer from "../../components/ui/ElementPointer.jsx";
import AdditionalText from "../../components/AdditionalText.jsx";

import {
  Stack,
  Typography,
  IconButton,
  Box,
  Tooltip,
  CircularProgress,
} from "@mui/joy";
import { HexToRGBA } from "../../lib/utils/colors.js";

import useLastCallback from "../../lib/hooks/useLastCallback.js";
import ModelViewer from "../../components/ui/ModelViewer.jsx";
import TooltipButton from "../../components/TooltipButton.jsx";

//[x, y, z]

const Scene = () => {
  const { model } = useParams();

  const handleClick = () => {
    console.log("Model clicked!");
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered model!");
  };

  const handleMouseLeave = () => {
    console.log("Mouse left model!");
  };

  return (
    <mesh position={[0, 0, 0]} scale={0.25}>
      <ModelViewer
        path={`/data/models/${model}.glb`}
        visible={true}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onError={(error) => console.error("Error loading model:", error)}
      />

      <AdditionalText
        text={"Lorem ipsum"}
        from={[2, 1, 0]}
        to={[6, 5, 5]}
        fontSize={0.5}
        color="white"
        maxWidth={3}
      />

      <AdditionalText
        text={"Lorem ipsum"}
        from={[0, 5, 0]}
        to={[6, 5, -5]}
        fontSize={0.5}
        color="white"
        maxWidth={3}
      />
    </mesh>
  );
};

function ARID() {
  return (
    <Stack
      sx={{
        overflow: "hidden",
        height: "100dvh",
        width: "100dvw",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
          justifyContent: "center",
          p: 2,
          zIndex: 10000,
        }}
      >
        <Typography
          sx={{
            border: "1px solid #9ad5b7",
            padding: "1px",
            bgcolor: HexToRGBA("#9ad5b7", 0.3),
            width: { xs: 100, sm: 150, md: 250, lg: 300 },
            p: "0.5rem",
            borderRadius: "md",
            boxShadow: "lg",

            "@keyframes slideIn": {
              "0%": {
                transform: "translateX(-100px)",
                opacity: 0,
              },
              "100%": {
                transform: "translateX(0)",
                opacity: 1,
              },
            },
            animation: "slideIn 0.5s ease-in-out",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          est molestias cumque ipsa nobis? Facilis itaque esse nulla blanditiis
          ad, atque earum saepe rem, quo reiciendis beatae eius doloremque
          quibusdam.
        </Typography>

        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            bottom: 0,
            right: 0,
            left: 0,
            p: 2,
          }}
        >
          <Stack
            direction="row"
            sx={{
              bgcolor: HexToRGBA("#9ad5b7", 0.3),
              gap: 1,
              border: "1px solid #9ad5b7",
              p: "0.25rem",
              borderRadius: "md",
              boxShadow: "lg",
            }}
          >
            <TooltipButton
              tooltipProps={{
                title: "Title",
                placement: "top",
                arrow: true,
                sx: { bgcolor: "#9ad5b7" },
              }}
            >
              a
            </TooltipButton>
            <IconButton>f</IconButton>
            <IconButton>f</IconButton>
            <IconButton>f</IconButton>
            <IconButton>f</IconButton>
          </Stack>
        </Box>
      </Stack>

      <ARCanvas
        cameraParametersUrl="/data/camera_para.dat"
        onCameraStreamReady={() => console.log("Camera stream ready")}
        onCameraStreamError={() => console.error("Camera stream error")}
        sourceType={"webcam"}
      >
        <ambientLight />
        <pointLight position={[10, 10, 0]} intensity={10.0} />
        <ARMarker
          debug={true}
          params={{ smooth: true }}
          type={"pattern"}
          patternUrl={"/data/patt.hiro"}
          onMarkerFound={() => {
            console.log("Marker Found");
          }}
        >
          <Scene />
        </ARMarker>
      </ARCanvas>
    </Stack>
  );
}

export default ARID;
