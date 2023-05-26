import { profileContext } from "context/profileContext";
import { Profile } from "features/auth";
import { FC, ReactNode, useEffect, useState } from "react";
import { storage } from "utils/storage";
export type ProfileProviderProps = { children: ReactNode };
const storedProfile = storage.getUser() ?? null;
export const ProfileProvider: FC<ProfileProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<Profile | null>(storedProfile);
  useEffect(() => {
    storage.setUser(profile);
  }, [profile]);
  return (
    <profileContext.Provider value={[profile, setProfile]}>{children}</profileContext.Provider>
  );
};
