import { Button, ButtonProps } from "@mui/material";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
export type RouterButtonProps = ButtonProps<typeof Link> & {
  to: string;
  children: ReactNode;
};
export const RouterButton: FC<RouterButtonProps> = ({ to, ...props }) => {
  return <Button {...props} to={to} component={Link} />;
};
