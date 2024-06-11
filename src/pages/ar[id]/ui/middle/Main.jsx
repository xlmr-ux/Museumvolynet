import { useModelStore, useSettingsStore } from "../../store";
import { Stack, Typography } from "@mui/joy";
import GreenBox from "../../../../components/GreenBox";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import FlatList from "../../../../components/FlatList";

const Main = () => {
  const visible = useSettingsStore((state) => state.display.visible);
  const modelData = useModelStore((state) => state.modelData);

  return (
    <Stack
      direction="row"
      data-visible={visible}
      sx={{
        justifyContent: "space-between",
        transition: "opacity 0.3s ease-in-out",
        [`&[data-visible="false"]`]: { opacity: 0 },
        [`&[data-visible="true"]`]: { opacity: 1 },
      }}
    >
      <Stack gap={1}>
        <GreenBox sx={{ flexDirection: "column", height: "min-content" }}>
          <Typography level="h2">{modelData?.title}</Typography>
        </GreenBox>

        <GreenBox sx={{ flexDirection: "column" }}>
          <Typography level="body-md">{modelData?.description}</Typography>
        </GreenBox>
      </Stack>

      <Stack gap={1}>
        <GreenBox sx={{ flexDirection: "column", height: "min-content" }}>
          <Typography level="h2">{modelData?.title}</Typography>
        </GreenBox>
        <GreenBox>
          <AccordionGroup
            transition="0.3s"
            sx={{
              [`& .${accordionSummaryClasses.button}:hover`]: {
                bgcolor: "transparent",
              },
              [`& .${accordionDetailsClasses.content}`]: {
                boxShadow: (theme) =>
                  `inset 0 1px ${theme.vars.palette.divider}`,
                [`&.${accordionDetailsClasses.expanded}`]: {
                  paddingBlock: "0.75rem",
                },
              },
            }}
          >
            <FlatList
              data={modelData?.labels}
              keyExtractor={(item) => `${item.id}`}
              renderItem={(item) => (
                <Accordion sx={{ "&:hover": { cursor: "pointer" } }}>
                  <AccordionSummary>{item.name}</AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.description}</Typography>
                    <Typography>
                      Dimensions: {item.dimensions.height} x{" "}
                      {item.dimensions.width} x {item.dimensions.depth}{" "}
                      {item.dimensions.unit}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )}
            />
          </AccordionGroup>
        </GreenBox>
      </Stack>
    </Stack>
  );
};

export default Main;
