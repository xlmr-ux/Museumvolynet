import { useSettingsStore } from "../store";
import {
  ArrowBack,
  CancelPresentation,
  ContentPasteGo,
  ContentPasteOff,
  Label,
  LabelOff,
  ViewSidebar,
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
  const {
    display: { visible, toggle },
  } = useSettingsStore((state) => ({
    display: state.display,
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

  return (
    <IconButton onClick={handleToggle}>
      <ViewSidebar />
    </IconButton>
  );
};

const DisableLablesButton = () => {
  const {
    labels: { visible, toggle },
  } = useSettingsStore((state) => ({
    labels: state.labels,
  }));

  return (
    <IconButton onClick={() => toggle()}>
      {visible ? <Label /> : <LabelOff />}
    </IconButton>
  );
};

const LightToggleButton = () => {
  const {
    sceneLight: { toggle },
  } = useSettingsStore((state) => ({
    sceneLight: state.sceneLight,
  }));

  return <IconButton onClick={() => toggle()}>Lg</IconButton>;
};

export {
  HideInterfaceButton,
  DrawerButton,
  DisableLablesButton,
  BackToHomeButton,
  LightToggleButton,
};
