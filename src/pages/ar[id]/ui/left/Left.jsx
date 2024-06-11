import {
  Accordion,
  Slider,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Stack,
} from "@mui/joy";
import { useSettingsStore } from "../../store";
import SideDrawer from "../../../../components/SideDrawer";
import useLastCallback from "../../../../lib/hooks/useLastCallback";
import { HexToRGBA } from "../../../../lib/utils/colors";
import { memo } from "react";

const SettingItem = ({ title, children, description }) => {
  return (
    <Stack gap={1}>
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
            boxShadow: "lg",
          }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
};

const SettingPoint = () => {
  const {
    scale: { step, setValue },
  } = useSettingsStore((state) => ({
    scale: state.scale,
  }));

  const handleChangeSize = useLastCallback((_, newValue) => {
    setValue(newValue);
  });

  return (
    <Slider
      sx={{ p: 0.5 }}
      step={step}
      defaultValue={0.2}
      min={0}
      max={3}
      valueLabelDisplay="auto"
      onChange={handleChangeSize}
    />
  );
};

const Left = () => {
  return (
    <SideDrawer>
      <Typography level="h3">Settings</Typography>
      <SettingItem title="Scale" description="Adjust the scale of the model">
        <SettingPoint />
      </SettingItem>
    </SideDrawer>
  );
};

export default Left;
