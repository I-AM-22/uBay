import React, { FC, ReactElement } from "react";
export type RepeatELementProps = {
  children: ReactElement;
  repeat: number;
  container: ReactElement;
};
const RepeatELement: FC<RepeatELementProps> = ({ repeat, children, container }) => {
  const elements = new Array(repeat).fill(children).map((child, index) =>
    React.cloneElement(child, {
      ...child.props,
      key: index,
    })
  );

  return React.cloneElement(container, {
    ...container.props,
    children: elements,
  });
};
export default RepeatELement;
