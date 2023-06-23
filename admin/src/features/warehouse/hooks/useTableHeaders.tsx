import "lib/i18next";
import { useTranslation } from "react-i18next";
const useTableHeader = () => {
  const { t: tCommon } = useTranslation();
  const { t } = useTranslation("warehouse", { keyPrefix: "table" });
  return [t("name"), t("city"), t("address"), tCommon("action")];
};

export default useTableHeader;
