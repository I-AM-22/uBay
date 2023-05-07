import { createContext, useContext } from "react";

const loadingContext = createContext(false);

export const useLoadingContext = () => useContext(loadingContext);

export const LoadingProvider = loadingContext.Provider;
