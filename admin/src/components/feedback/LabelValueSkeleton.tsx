import LabelValue from "components/typography/LabelValue";
import { FC } from "react";
import Skeleton, { SkeletonRange } from "./Skeleton";
export type LabelValueSkeletonProps = {
  height: number | string;
  labelWidthRange: SkeletonRange;
  valueWidthRange: SkeletonRange;
};
const LabelValueSkeleton: FC<LabelValueSkeletonProps> = ({
  height,
  labelWidthRange,
  valueWidthRange,
}) => {
  return (
    <LabelValue
      label={<Skeleton variant="rounded" widthRange={labelWidthRange} height={height} />}
      noColon
    >
      <Skeleton variant="rounded" widthRange={valueWidthRange} height={height} />
    </LabelValue>
  );
};
export default LabelValueSkeleton;
