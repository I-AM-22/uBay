import { LinkProps } from "@mui/material";
import { FC } from "react";
import RouterLink from "./RouterLink";
type Props = LinkProps & { withLink: boolean };
const OptionalLink: FC<Props> = ({ withLink, children, ...props }) => {
  return withLink ? <RouterLink {...props}>{children}</RouterLink> : <> {children}</>;
};
export default OptionalLink;
