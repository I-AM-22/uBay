import { Link, LinkProps } from "@mui/material";
import { FC, forwardRef } from "react";
import { Link as Router, LinkProps as RouterProps } from "react-router-dom";
export type RouterLinkProps = LinkProps & RouterProps & { noDecoration?: boolean };
const RouterLink: FC<RouterLinkProps> = forwardRef(function FR(
  { children, noDecoration = false, ...props }: RouterLinkProps,
  _ref
) {
  return (
    <Link
      ref={_ref}
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
});
export default RouterLink;
