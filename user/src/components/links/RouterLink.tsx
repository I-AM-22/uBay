import { Link, LinkProps } from "@mui/material";
import { FC, forwardRef } from "react";
import { Link as Router, LinkProps as RouterProps } from "react-router-dom";
export type RouterLinkProps = LinkProps & RouterProps & { noStyle?: boolean };
const RouterLink: FC<RouterLinkProps> = forwardRef(function FR(
  { children, noStyle: noStyle = false, ...props }: RouterLinkProps,
  _ref
) {
  return (
    <Link
      ref={_ref}
      component={Router}
      {...props}
      sx={{
        ...(noStyle && {
          textDecoration: "none",
          color: "inherit",
          "&:hover": { color: "inherit" },
        }),
        ...props.sx,
      }}
    >
      {children}
    </Link>
  );
});
export default RouterLink;
