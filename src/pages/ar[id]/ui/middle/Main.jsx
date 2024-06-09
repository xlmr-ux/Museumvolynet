import { useDisplayStote, useModelStore } from "../../store";
import { Stack, Typography } from "@mui/joy";
import  GreenBox  from "../../../../components/GreenBox";

const Main = () => {
  const visible = useDisplayStote((state) => state.visible);
  const modelData = useModelStore((state) => state.modelData);

  return (
    <Stack
      data-visible={visible}
      sx={{
        transition: "opacity 0.5s ease-in-out",
        [`&[data-visible="false"]`]: { opacity: 0 },
        [`&[data-visible="true"]`]: { opacity: 1 },
      }}
    >
      <GreenBox sx={{ flexDirection: "column" }}>
        <Typography level="h2">{modelData?.title}</Typography>
        <Typography level="body-md">{modelData?.description}</Typography>
      </GreenBox>
    </Stack>
  );
};

export default Main;
