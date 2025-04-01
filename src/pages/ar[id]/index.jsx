import { useParams, useNavigate } from "react-router-dom";
import { ARCanvas, ARMarker } from "../../components/ar";
import AdditionalText from "../../components/AdditionalText.jsx";
import { Stack, Box } from "@mui/joy";
import { HexToRGBA } from "../../lib/utils/colors.js";
import ModelViewer from "../../components/ui/ModelViewer.jsx";
import {
  useLightSettingsStore,
  useModelStore,
  useSettingsStore,
} from "./store/index.js";
import { ModelData } from "./api/index.js";
import { memo, useEffect } from "react";
import {
  DrawerButton,
  HideInterfaceButton,
  DisableLablesButton,
  BackToHomeButton,
  LightToggleButton,
} from "./ui/buttons.jsx";
import Main from "./ui/middle/Main.jsx";
import { useThree } from "@react-three/fiber";
import { Color } from "three";
import { useDocumentTitle } from "../../lib/hooks/useDocumentTitle.js";
import Left from "./ui/left/Left.jsx";

const capitalizeWords = (str) => {
  if (!str) return "";
  return str
    .split(/[-_ ]+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const Scene = () => {
  const {
    labels: { visible },
    scale: { value },
  } = useSettingsStore((state) => ({
    labels: state.labels,
    scale: state.scale,
  }));

  const { modelData } = useModelStore((state) => ({
    modelData: state.modelData,
  }));

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

  if (!modelData) return null;

  return (
    <mesh position={[0, 0, 0]} scale={value}>
      <ModelViewer
        path={`/data/models/${model}.glb`}
        visible={true}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onError={(error) => console.error("Error loading model:", error)}
      />
      {visible &&
        modelData?.labels?.map((label) => (
          <group key={label.id}>
            <AdditionalText
              text={label.name}
              from={label.from}
              to={label.to}
              fontSize={0.7}
              color="white"
              maxWidth={3}
            />
          </group>
        ))}
    </mesh>
  );
};

const Lights = () => {
  const { scene } = useThree();
  const {
    sceneLight: { visible },
  } = useSettingsStore((state) => ({
    sceneLight: state.sceneLight,
  }));

  const {
    ambientLightIntensity,
    directionalLightIntensity,
    directionalLightPosition,
    directionalLightCastShadow,
    directionalLightShadowMapSizeWidth,
    directionalLightShadowMapSizeHeight,
    pointLightIntensity,
    pointLightPosition,
    spotLightIntensity,
    spotLightPosition,
    spotLightAngle,
    spotLightPenumbra,
    spotLightCastShadow,
    spotLightShadowMapSizeWidth,
    spotLightShadowMapSizeHeight,
  } = useLightSettingsStore();

  scene.background = visible ? new Color(0x000000) : null;

  return (
    <>
      <ambientLight intensity={ambientLightIntensity} />
      <directionalLight
        intensity={directionalLightIntensity}
        position={directionalLightPosition}
        castShadow={directionalLightCastShadow}
        shadow-mapSize-width={directionalLightShadowMapSizeWidth}
        shadow-mapSize-height={directionalLightShadowMapSizeHeight}
      />
      <pointLight
        intensity={pointLightIntensity}
        position={pointLightPosition}
      />
      <spotLight
        intensity={spotLightIntensity}
        position={spotLightPosition}
        angle={spotLightAngle}
        penumbra={spotLightPenumbra}
        castShadow={spotLightCastShadow}
        shadow-mapSize-width={spotLightShadowMapSizeWidth}
        shadow-mapSize-height={spotLightShadowMapSizeHeight}
      />
    </>
  );
};

const ARScene = memo((props) => {
  const { children } = props;
  return (
    <ARCanvas
      cameraParametersUrl="/data/camera_para.dat"
      onCameraStreamReady={() => console.log("Camera stream ready")}
      onCameraStreamError={() => console.error("Camera stream error")}
      sourceType={"webcam"}
    >
      <Lights />
      <ARMarker
        debug={true}
        params={{ smooth: true }}
        type={"pattern"}
        patternUrl={"/data/patt.hiro"}
        onMarkerFound={() => {
          console.log("Marker Found");
        }}
      >
        {children}
      </ARMarker>
    </ARCanvas>
  );
});

function ARID() {
  const { model } = useParams();
  const navigate = useNavigate();
  useDocumentTitle(capitalizeWords(model));

  const { setModelData } = useModelStore((state) => ({
    setModelData: state.setModelData,
  }));

  useEffect(() => {
    // Validate model ID before proceeding
    const validModel = ModelData.find((data) => data.id === model);
    if (!validModel) {
      console.error(`Invalid model ID: ${model}`);
      navigate("/", { replace: true });
      return;
    }

    setModelData(validModel);

    // Add canonical tag for SEO
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = window.location.href;
    document.head.appendChild(canonical);

    return () => {
      document.head.removeChild(canonical);
    };
  }, [model, navigate, setModelData]);

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
          zIndex: 8800,
        }}
      >
        <BackToHomeButton />

        <Left />
        <Main />

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
            <HideInterfaceButton />
            <DrawerButton />
            <DisableLablesButton />
            <LightToggleButton />
          </Stack>
        </Box>
      </Stack>

      <ARScene>
        <Scene />
      </ARScene>
    </Stack>
  );
}

export default ARID;