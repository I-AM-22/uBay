import DiscountIcon from "@mui/icons-material/Discount";
import { Stack, Typography } from "@mui/material";
import { discountQueries } from "features/discount";
import { EdgeDrawer, EdgeDrawerProps } from "features/layout";
import { Post } from "features/post";
import { useIsDesktop } from "hooks/useIsDesktop";
import InfiniteScroll from "lib/infiniteScroll";
import { FC, useId } from "react";
import { useTranslation } from "react-i18next";
import { DiscountCard } from "./DiscountCard";
export type DiscountsDrawerProps = Omit<EdgeDrawerProps, "children"> & {
  post: Post | null;
};
export const DiscountsDrawer: FC<DiscountsDrawerProps> = ({ post, ...props }) => {
  const query = discountQueries.useByProduct(props.open ? post?._id ?? "" : "");
  const isDesktop = useIsDesktop();
  const scrollId = useId();
  const { t } = useTranslation("discount");
  const isEmpty = query.isSuccess && query.data.pages[0].data.length === 0;

  return (
    <>
      <EdgeDrawer
        {...props}
        id={scrollId}
        title={
          <Typography variant="h6" sx={{ color: "primary.900", textAlign: "center" }}>
            {t("discounts")}
          </Typography>
        }
        sx={{
          ".MuiDrawer-paper": {
            width: isDesktop ? 400 : 1,
            height: 1,
            pb: 5,
            pt: 1,
          },
        }}
      >
        <InfiniteScroll
          scrollElement={scrollId}
          sx={{
            gap: 1,
            p: 2,
            height: 1,
          }}
          query={query}
        >
          {isEmpty && (
            <Stack alignItems={"center"} mt="auto" gap={4}>
              <DiscountIcon sx={{ color: "", fontSize: 100 }} />
              <Typography color="#444" fontSize="clamp(17px,4vw,23px)">
                {t("empty")}
              </Typography>
            </Stack>
          )}
          {query.isSuccess &&
            query.data.pages.map((page) =>
              page.data.map((discount) => <DiscountCard discount={discount} key={discount._id} />)
            )}
          {query.isInitialLoading && (
            <>
              <DiscountCard skeleton />
              <DiscountCard skeleton />
              <DiscountCard skeleton />
              <DiscountCard skeleton />
            </>
          )}
        </InfiniteScroll>
      </EdgeDrawer>
    </>
  );
};
