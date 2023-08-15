import { Box, Card, Fade, Stack, Typography } from "@mui/material";
import Skeleton from "components/feedback/Skeleton";
import { FC, ReactNode } from "react";
import CountUp from "react-countup";

export type CountCardProps = {
  count?: number;
  label: ReactNode;
  index: number;
  icon: ReactNode;
};
export const CountCard: FC<CountCardProps> = ({ count, label, index, icon }) => {
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
              {!isLoading && <CountUp end={count} useEasing duration={index + 1} />}
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
