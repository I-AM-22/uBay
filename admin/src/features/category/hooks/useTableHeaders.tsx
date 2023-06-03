import "lib/i18next";
import { useTranslation } from "react-i18next";
const useTableHeader = () => {
  const { t: tCommon } = useTranslation();
  const { t } = useTranslation("category", { keyPrefix: "table" });
  return [t("name"), t("description"), tCommon("action")];
};

export default useTableHeader;
