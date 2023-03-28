import { Link, LinkProps } from "@mui/material";
import { FC } from "react";
import { Link as Router } from "react-router-dom";
const RouterLink: FC<LinkProps & { noDecoration?: boolean }> = ({
  href,
  children,
  noDecoration = false,
  ...props
}) => {
  return (
    <Link
      component={Router}
      to={href ?? ""}
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
