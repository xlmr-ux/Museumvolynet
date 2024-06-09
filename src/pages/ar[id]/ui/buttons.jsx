import { useDisplayStote, useLabelsStore, useSceneLightStore } from "../store";
import {
  ArrowBack,
  ContentPasteGo,
  ContentPasteOff,
} from "@mui/icons-material";
import { IconButton } from "@mui/joy";
import TooltipButton from "../../../components/TooltipButton";
import { useDrawerStore } from "../../../components/SideDrawer/store";

const BackToHomeButton = () => {
  return (
    <IconButton
      component="a"
      href="/"
      sx={{ position: "absolute", top: 2, left: 2 }}
    >
      <ArrowBack />
      &nbsp;Back to Home
    </IconButton>
  );
};

const HideInterfaceButton = () => {
  const { visible, toggle } = useDisplayStote((state) => ({
    visible: state.visible,
    toggle: state.toggle,
  }));

  const handleToggle = () => {
    toggle();
  };

  return (
    <TooltipButton
      tooltipProps={{
        title: `${visible ? "Hide" : "Show"} interface`,
        placement: "top",
        arrow: true,
      }}
      buttonProps={{
        onClick: handleToggle,
      }}
    >
      {visible ? <ContentPasteGo /> : <ContentPasteOff />}
    </TooltipButton>
  );
};

const DrawerButton = () => {
  const { toggle } = useDrawerStore((state) => ({
    toggle: state.toggle,
  }));

  const handleToggle = () => {
    toggle();
  };

  return <IconButton onClick={handleToggle}>D</IconButton>;
};

const DisableLablesButton = () => {
  const toggle = useLabelsStore((state) => state.toggle);
  return <IconButton onClick={() => toggle()}>L</IconButton>;
};

const LightToggleButton = () => {
  const toggle = useSceneLightStore((state) => state.toggleLight);
  return <IconButton onClick={() => toggle()}>Lg</IconButton>;
};

export {
  HideInterfaceButton,
  DrawerButton,
  DisableLablesButton,
  BackToHomeButton,
  LightToggleButton,
};
