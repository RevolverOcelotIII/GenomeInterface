import React from "react";
import {
  TooltipContainer,
  TooltipHoverArea,
  TooltipText,
} from "./TooltipStyle";

function Tooltip({children, text}) {
  return (
    <TooltipContainer>
      <TooltipHoverArea>{children}</TooltipHoverArea>
      <TooltipText>{text}</TooltipText>
    </TooltipContainer>
  );
}

export default Tooltip;
