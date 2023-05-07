import languageContext, { initialLanguageContext } from "context/languageContext";

import "lib/i18next";
import { changeLanguage } from "lib/i18next";
import { FC, useEffect, useState } from "react";
const LanguageProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState(initialLanguageContext.lang);
  useEffect(() => {
    changeLanguage(lang);
  }, [lang]);

  return <languageContext.Provider value={{ lang, setLang }}>{children}</languageContext.Provider>;
};
export default LanguageProvider;
