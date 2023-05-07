import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

type Props = { children: ReactNode };

const Direction: FC<Props> = ({ children }) => {
  const { i18n } = useTranslation();
  if (i18n.language === "ar") return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
  else return <>{children}</>;
};
export default Direction;
