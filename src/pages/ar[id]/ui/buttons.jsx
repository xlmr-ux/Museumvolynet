import { useSettingsStore } from "../store";
import {
  ArrowBack,
  CancelPresentation,
  ContentPasteGo,
  ContentPasteOff,
  HighlightOff,
  Label,
  LabelOff,
  LightModeOutlined,
  ViewSidebar,
} from "@mui/icons-material";
import { IconButton } from "@mui/joy";
import TooltipButton from "../../../components/TooltipButton";
import { useDrawerStore } from "../../../components/SideDrawer/store";
import { useShallow } from "zustand/react/shallow";

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
  } = useSettingsStore(
    useShallow((state) => ({
      display: state.display,
    }))
  );

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
  } = useSettingsStore(
    useShallow((state) => ({
      labels: state.labels,
    }))
  );

  return (
    <IconButton onClick={() => toggle()}>
      {visible ? <Label /> : <LabelOff />}
    </IconButton>
  );
};

const LightToggleButton = () => {
  const {
    sceneLight: { visible, toggle },
  } = useSettingsStore(
    useShallow((state) => ({
      sceneLight: state.sceneLight,
    }))
  );

  return (
    <IconButton onClick={() => toggle()}>
      {!visible ? <LightModeOutlined /> : <HighlightOff />}
    </IconButton>
  );
};

export {
  HideInterfaceButton,
  DrawerButton,
  DisableLablesButton,
  BackToHomeButton,
  LightToggleButton,
};
