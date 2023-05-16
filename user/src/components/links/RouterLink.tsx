import { Link, LinkProps } from "@mui/material";
import { FC } from "react";
import { Link as Router, LinkProps as RouterProps } from "react-router-dom";
export type RouterLinkProps = LinkProps & RouterProps & { noDecoration?: boolean };
const RouterLink: FC<RouterLinkProps> = ({ children, noDecoration = false, ...props }) => {
  return (
    <Link
      component={Router}
      {...props}
      sx={{
        textDecoration: noDecoration ? "none" : "underline",
        ...props.sx,
      }}
    >
      {children}
    </Link>
  );
};
export default RouterLink;
