import Slide, { SlideProps } from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { ReactElement } from "react";

export type HideOnScrollProps = {
  children: ReactElement;
} & SlideProps;

export function HideOnScroll({ children, ...props }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide direction="up" {...props} in={!trigger}>
      {children}
    </Slide>
  );
}
