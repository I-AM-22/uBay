import { FC } from "react";
import RouterLink, { RouterLinkProps } from "./RouterLink";
type Props = RouterLinkProps & { withLink: boolean };
const OptionalLink: FC<Props> = ({ withLink, children, ...props }) => {
  return withLink ? <RouterLink {...props}>{children}</RouterLink> : <> {children}</>;
};
export default OptionalLink;
