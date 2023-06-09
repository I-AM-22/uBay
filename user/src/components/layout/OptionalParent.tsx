import { ElementType, FC, ReactNode } from "react";
export type OptionalWrapProps = { Element: ElementType; wrap: boolean; children: ReactNode };
export const OptionalWrap: FC<OptionalWrapProps> = ({ Element, wrap, children }) => {
  return wrap ? <Element>{children}</Element> : <>{children}</>;
};
