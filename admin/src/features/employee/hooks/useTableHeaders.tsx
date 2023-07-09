import "lib/i18next";
import { useTranslation } from "react-i18next";
const useTableHeader = () => {
  const { t: tCommon } = useTranslation();
  const { t } = useTranslation("employee", { keyPrefix: "table" });
  return [t("name"), t("store"), t("email"), t("createdAt"), tCommon("action")];
};

export default useTableHeader;
