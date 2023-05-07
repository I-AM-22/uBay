import React, { useContext } from "react";
import { storage } from "utils/storage";
export interface LanguageContext {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}
const language = storage.getLanguage() ?? "ar";

export const initialLanguageContext = {
  lang: language,
  setLang: ((value: string) => value) as React.Dispatch<React.SetStateAction<string>>,
};
const languageContext = React.createContext<LanguageContext>(initialLanguageContext);
export const useLanguageContext = () => useContext(languageContext);
export default languageContext;
