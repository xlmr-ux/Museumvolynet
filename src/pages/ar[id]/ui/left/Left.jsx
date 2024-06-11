import {
  Accordion,
  Slider,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Divider,
  Input,
} from "@mui/joy";
import { useLightSettingsStore, useSettingsStore } from "../../store";
import SideDrawer from "../../../../components/SideDrawer";
import useLastCallback from "../../../../lib/hooks/useLastCallback";
import { HexToRGBA } from "../../../../lib/utils/colors";
import { memo, useRef } from "react";
import { useShallow } from "zustand/react/shallow";

const SettingItem = ({ title, children, description }) => {
  return (
    <Stack gap={1} sx={{ mb: 2 }}>
      {title && (
        <Typography level="body-lg" sx={{ color: "#9ad5b7" }}>
          {title}
        </Typography>
      )}
      {children}
      {description && (
        <Typography
          level="body-sm"
          color="text.primary"
          sx={{
            bgcolor: HexToRGBA("#9ad5b7", 0.3),
            px: 0.75,
            borderRadius: "md",
          }}
        >
          {description}
        </Typography>
      )}
      <Divider />
    </Stack>
  );
};

const ScaleStepSettings = () => {
  const inputRef = useRef(null);

  const { step, setStep } = useSettingsStore(
    useShallow((state) => state.scale)
  );

  const handleChangeStep = useLastCallback((event) => {
    const newValue = parseFloat(event.target.value);
    setStep(newValue);
  });

  return (
    <Input
      type="number"
      onChange={handleChangeStep}
      defaultValue={step}
      step={step}
      slotProps={{
        input: {
          ref: inputRef,
          min: 0,
          step: step,
        },
      }}
    />
  );
};

const ScaleSettings = () => {
  const {
    scale: { step, setValue },
  } = useSettingsStore(
    useShallow((state) => ({
      scale: state.scale,
    }))
  );

  const handleChangeSize = useLastCallback((_, newValue) => {
    setValue(newValue);
  });

  return (
    <Slider
      sx={{ p: 0.5 }}
      step={step}
      defaultValue={0.2}
      min={0}
      max={2}
      valueLabelDisplay="auto"
      onChange={handleChangeSize}
    />
  );
};

const AmbientLightSettings = () => {
  const { ambientLightIntensity, setAmbientLightIntensity } =
    useLightSettingsStore(
      useShallow((state) => ({
        ambientLightIntensity: state.ambientLightIntensity,
        setAmbientLightIntensity: state.setAmbientLightIntensity,
      }))
    );

  const handleAmbientLightChange = useLastCallback((event, newValue) => {
    setAmbientLightIntensity(newValue);
  });

  return (
    <Slider
      sx={{ p: 0.5 }}
      value={ambientLightIntensity}
      min={-5}
      max={5}
      step={0.1}
      valueLabelDisplay="auto"
      onChange={handleAmbientLightChange}
    />
  );
};

const DirectionalLightSettings = () => {
  const { directionalLightIntensity, setDirectionalLightIntensity } =
    useLightSettingsStore(
      useShallow((state) => ({
        directionalLightIntensity: state.directionalLightIntensity,
        setDirectionalLightIntensity: state.setDirectionalLightIntensity,
      }))
    );

  const handleDirectionalLightChange = useLastCallback((event, newValue) => {
    setDirectionalLightIntensity(newValue);
  });

  return (
    <Slider
      sx={{ p: 0.5 }}
      value={directionalLightIntensity}
      min={-5}
      max={5}
      step={0.1}
      valueLabelDisplay="auto"
      onChange={handleDirectionalLightChange}
    />
  );
};

const DirectionalLightPosition = () => {
  const { directionalLightPosition, setDirectionalLightPosition } =
    useLightSettingsStore(
      useShallow((state) => ({
        directionalLightPosition: state.directionalLightPosition,
        setDirectionalLightPosition: state.setDirectionalLightPosition,
      }))
    );

  const handleDirectionalLightPositionChange = useLastCallback(
    (event, newValue) => {
      setDirectionalLightPosition(newValue);
    }
  );

  return (
    <Slider
      track={false}
      defaultValue={directionalLightPosition}
      valueLabelDisplay="auto"
      onChange={handleDirectionalLightPositionChange}
    />
  );
};

const Left = () => {
  return (
    <SideDrawer>
      <Typography level="h3">Settings</Typography>
      <Divider />

      <SettingItem
        title="Scale Step"
        description="Adjust the step size of the slider to control the precision of the scaling."
      >
        <ScaleStepSettings />
      </SettingItem>

      <SettingItem
        title="Scale"
        description="Adjust the scale of the model to fit your preference."
      >
        <ScaleSettings />
      </SettingItem>

      <SettingItem
        title="Ambient Light Intensity"
        description="Modify the intensity of the ambient light to control the overall brightness and mood."
      >
        <AmbientLightSettings />
      </SettingItem>

      <SettingItem
        title="Directional Light Intensity"
        description="Tweak the intensity of the directional light for precise illumination and shadows."
      >
        <DirectionalLightSettings />
      </SettingItem>

      <SettingItem
        title="Directional Light Position"
        description="Adjust the position of the directional light to control the direction and orientation."
      >
        <DirectionalLightPosition />
      </SettingItem>
    </SideDrawer>
  );
};

export default Left;
