import { Skeleton as MuiSkeleton, SkeletonProps as Props } from "@mui/material";
import { FC, useMemo } from "react";
export type SkeletonRange = { min: number; max: number };
export type SkeletonProps = {
  widthRange?: SkeletonRange;
  heightRange?: SkeletonRange;
} & Props;
const Skeleton: FC<SkeletonProps> = ({ widthRange, heightRange, ...props }) => {
  const width = useMemo(
    () => (widthRange ? widthRange.min + Math.random() * widthRange.max : props.width),
    [widthRange, props.width]
  );
  const height = useMemo(
    () => (heightRange ? heightRange.min + Math.random() * heightRange.max : props.height),
    [heightRange, props.height]
  );
  return <MuiSkeleton {...props} width={width} height={height} />;
};
export default Skeleton;
