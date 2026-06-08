"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface UserData {
  name: string;
  email: string;
  phone: string;
}

interface VideoAccessState {
  isUnlocked: boolean;
  userData: UserData | null;
  unlock: (data: UserData) => void;
}

const VideoAccessContext = createContext<VideoAccessState>({
  isUnlocked: false,
  userData: null,
  unlock: () => {},
});

export function VideoAccessProvider({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("videoUnlocked");
    if (stored === "true") {
      setIsUnlocked(true);
      const storedUser = localStorage.getItem("videoUserData");
      if (storedUser) setUserData(JSON.parse(storedUser));
    }
  }, []);

  function unlock(data: UserData) {
    setIsUnlocked(true);
    setUserData(data);
    localStorage.setItem("videoUnlocked", "true");
    localStorage.setItem("videoUserData", JSON.stringify(data));
  }

  return (
    <VideoAccessContext.Provider value={{ isUnlocked, userData, unlock }}>
      {children}
    </VideoAccessContext.Provider>
  );
}

export function useVideoAccess() {
  return useContext(VideoAccessContext);
}
