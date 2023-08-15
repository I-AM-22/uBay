import { Card, CardContent, CardHeader, Slide, Stack, Typography } from "@mui/material";
import Skeleton from "components/feedback/Skeleton";
import { UserAvatar } from "components/icons/UserAvatar";
import LabelValue from "components/typography/LabelValue";
import dayjs from "dayjs";
import Timeago from "lib/Timeago";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { priceFormatter } from "utils/transforms";
import { DiscountProduct } from "../api/type";
import { DiscountOptions } from "./DiscountOptions";
export type DiscountCardProps =
  | { discount: DiscountProduct; skeleton?: false }
  | { discount?: undefined; skeleton: true };
export const DiscountCard: FC<DiscountCardProps> = ({ discount, skeleton }) => {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation("discount");
  const handleRemove = () => {
    setOpen(false);
  };

  return (
    <Slide direction="right" in={open} mountOnEnter appear={false} unmountOnExit>
      <Card
        sx={{
          opacity: discount && dayjs(discount.expire).diff(dayjs(), "day") <= 0 ? 0.8 : 1,
        }}
      >
        <CardHeader
          avatar={<UserAvatar src={discount?.user.photo} isLoading={skeleton} />}
          action={discount && <DiscountOptions onRemove={handleRemove} discount={discount} />}
          title={
            <Stack
              pt={0.4}
              pr={0.25}
              flexWrap={"wrap"}
              direction="row"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {discount && <Typography>{discount.user.name}</Typography>}
              {skeleton && <Skeleton widthRange={{ min: 40, max: 50 }} />}
            </Stack>
          }
          subheader={discount && <Timeago date={discount.createdAt} />}
        />

        <CardContent sx={{ pt: 0 }}>
          {discount && (
            <Stack
              sx={{
                ".label-value": {
                  minWidth: 1,
                  ".label": {
                    width: 0.4,
                    minWidth: "fit-content",
                  },
                  ".value": {
                    color: "primary.900",
                  },
                },
              }}
            >
              <LabelValue noColon label={t("discount")}>
                {priceFormatter.format(discount.discount)}
              </LabelValue>
              <LabelValue noColon label={t("priceAfterDiscount")}>
                {priceFormatter.format(discount.product.price - discount.discount)}
              </LabelValue>
              <LabelValue noColon label={t("expireDate")}>
                {discount.expire !== null && (
                  <>
                    {dayjs(discount.expire).diff(dayjs(), "day") > 0
                      ? t("afterDays", { days: dayjs(discount.expire).diff(dayjs(), "day") })
                      : t("expired")}{" "}
                    {`(${dayjs(discount.expire).format("YYYY/DD/MM")})`}
                  </>
                )}
                {discount.expire === null && t("noExpire")}
              </LabelValue>
            </Stack>
          )}

          {skeleton && (
            <Stack>
              <Skeleton widthRange={{ min: 60, max: 130 }} />
              <Skeleton widthRange={{ min: 70, max: 130 }} />
            </Stack>
          )}
        </CardContent>
      </Card>
    </Slide>
  );
};
