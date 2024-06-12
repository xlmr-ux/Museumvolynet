import { Box } from "@mui/joy";
import { HexToRGBA } from "../lib/utils/colors";

const GreenBox = (props) => {
  const { children, sx, ...rest } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid #9ad5b7",
        padding: "1px",
        bgcolor: HexToRGBA("#81A263", 0.2),
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease-in-out",
        boxShadow: "lg",
        width: { xs: 150, sm: 200, md: 250, lg: 300 },
        height: { xs: 200, sm: 250, md: 350, lg: 400 },
        p: "0.25rem",
        borderRadius: "md",
        overflowY: "auto",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default GreenBox;
