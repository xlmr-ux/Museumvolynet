import { IconButton, Tooltip } from "@mui/joy";

const TooltipButton = ({ children, tooltipProps = {}, buttonProps = {} }) => {
  return (
    <Tooltip title="Tooltip" {...tooltipProps}>
      <span>
        <IconButton {...buttonProps}>{children}</IconButton>
      </span>
    </Tooltip>
  );
};

export default TooltipButton;
