import { ComponentType, ReactNode } from "react";
export type OptionalWrapProps<T> = {
  Element: ComponentType<T>;
  ElementProps: T;
  wrap: boolean;
  children: ReactNode;
};
export const OptionalWrap = <T,>({
  Element,
  wrap,
  children,
  ElementProps,
}: OptionalWrapProps<T>) => {
  return wrap ? <Element {...ElementProps}>{children}</Element> : <>{children}</>;
};
