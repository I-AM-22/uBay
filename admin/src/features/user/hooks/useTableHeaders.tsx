import "lib/i18next";
import { useTranslation } from "react-i18next";
const useTableHeader = () => {
  const { t: tCommon } = useTranslation();
  const { t } = useTranslation("user", { keyPrefix: "table" });
  return [t("name"), t("email"), t("available"), t("pending"), t("createdAt"), tCommon("action")];
};

export default useTableHeader;
