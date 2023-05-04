import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { ReactElement } from "react";

export interface HideOnScrollProps {
  children: ReactElement;
}

export function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
