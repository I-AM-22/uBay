import { Box, Card, Fade, Stack, Typography } from "@mui/material";
import Skeleton from "components/feedback/Skeleton";
import { FC, ReactNode } from "react";
import CountUp from "react-countup";

export type CountCardProps = {
  count?: number;
  label: ReactNode;
  index: number;
  icon: ReactNode;
  fadedLabel?: ReactNode;
  fadedCount?: number;
};
export const CountCard: FC<CountCardProps> = ({
  count,
  label,
  index,
  icon,
  fadedLabel,
  fadedCount,
}) => {
  const isLoading = count === undefined;
  return (
    <Fade in={true} timeout={500 * index + 500}>
      <Card elevation={1} sx={{ px: 3, pt: 2, pb: 1, borderRadius: 2 }}>
        <Stack direction="row" gap={3} justifyContent={"space-between"}>
          <Stack pl={1}>
            <Typography variant="h6" sx={{ fontSize: 17, color: "#4B465C" }}>
              {label}
            </Typography>
            <Box sx={{ fontSize: 20, pb: 3, color: "#4B465C" }}>
              {!isLoading && (
                <Stack direction={"row"} alignItems={"center"}>
                  <CountUp end={count} useEasing duration={index + 1} />
                  {fadedLabel && fadedCount && (
                    <Stack
                      direction={"row"}
                      fontSize={16}
                      color="text.secondary"
                      alignItems={"center"}
                      gap={0.5}
                      ml={1}
                    >
                      {fadedLabel}
                      <CountUp end={fadedCount} useEasing duration={index + 1} />
                    </Stack>
                  )}
                </Stack>
              )}
              {isLoading && <Skeleton sx={{ fontSize: 15 }} widthRange={{ min: 27, max: 30 }} />}
            </Box>
          </Stack>
          <Box my="auto" sx={{ svg: { fontSize: 50, color: "primary.main" } }}>
            {icon}
          </Box>
        </Stack>
      </Card>
    </Fade>
  );
};
