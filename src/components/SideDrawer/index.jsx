import { Box, Button, Drawer, Sheet } from "@mui/joy";
import { useDrawerStore } from "./store";
import useMedia from "../../lib/hooks/useMedia";
import { useRef } from "react";
import useClickAway from "../../lib/hooks/useClickAway";

const SideDrawer = ({ children, ...drawerProps }) => {
  const dRef = useRef();
  const isMobile = useMedia("(max-width: 600px)");
  const { visible, toggleDrawer, closeDrawer } = useDrawerStore((state) => ({
    visible: state.visible,
    toggleDrawer: state.toggle,
    closeDrawer: state.close,
  }));

  useClickAway(dRef, () => {
    if (closeDrawer) closeDrawer();
  });

  return (
    <Drawer
      ref={dRef}
      {...drawerProps}
      open={visible}
      onClose={toggleDrawer}
      variant="soft"
      anchor={isMobile ? "top" : "left"}
      sx={{ zIndex: 9999 }}
      slotProps={{
        backdrop: {
          sx: { backdropFilter: "blur(10px)" },
        },
        content: {
          sx: {
            height: isMobile ? "100vh" : "100%",
            ...(isMobile && { width: "100vw" }),
            bgcolor: "transparent",
            p: { md: 3, sm: 0 },
            boxShadow: "none",
            width: "450px",
          },
        },
      }}
    >
      <Sheet
        sx={{
          borderRadius: "md",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          height: "100%",
          overflow: "auto",
          zIndex: 9999,
          bgcolor: "background.level1",

        }}
      >
        {children}
      </Sheet>
    </Drawer>
  );
};

export default SideDrawer;
