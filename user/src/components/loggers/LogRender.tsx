import { FC } from "react";
export type LogRenderProps = { title: string };
export const LogRender: FC<LogRenderProps> = ({ title }) => {
  console.log(`${title} rendered`);
  return null;
};
export default LogRender;
