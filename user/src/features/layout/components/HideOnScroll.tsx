import { Box } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { ReactElement } from "react";

export type HideOnScrollProps = {
  children?: ReactElement;
} & Omit<SlideProps, "children">;

export function HideOnScroll({ children, in: active = true, ...props }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide direction="up" {...props} in={!trigger || !active}>
      {children ?? <Box />}
    </Slide>
  );
}
