import { Profile } from "features/auth";
import React, { useContext } from "react";
import { storage } from "utils/storage";
export type ProfileContext = [Profile | null, React.Dispatch<React.SetStateAction<Profile | null>>];
const storedProfile = storage.getUser() ?? null;
export const profileContext = React.createContext<ProfileContext>([
  storedProfile,
  (value) => value,
]);
export const useProfile = () => useContext(profileContext);
