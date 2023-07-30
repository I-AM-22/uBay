import { Skeleton as MuiSkeleton, SkeletonProps as Props } from "@mui/material";
import { FC, useMemo } from "react";
export type SkeletonRange = { min: number; max: number };
export type SkeletonProps = {
  widthRange?: SkeletonRange;
  heightRange?: SkeletonRange;
} & Props;
const Skeleton: FC<SkeletonProps> = ({ widthRange, heightRange, ...props }) => {
  const isWidthRange = !!widthRange;
  const isHeightRange = !!heightRange;
  const width = useMemo(
    () => (isWidthRange ? widthRange.min + Math.random() * widthRange.max : props.width),
    [isWidthRange, widthRange?.min, widthRange?.max, props.width]
  );
  const height = useMemo(
    () => (isHeightRange ? heightRange.min + Math.random() * heightRange.max : props.height),
    [isHeightRange, heightRange?.min, heightRange?.max, props.height]
  );

  return <MuiSkeleton {...props} width={width} height={height} />;
};
export default Skeleton;
