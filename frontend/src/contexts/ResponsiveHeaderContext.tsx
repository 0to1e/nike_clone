import { createContext, ReactNode } from "react";
import { useState } from "react";

interface IResponsiveHeaderContext {
  isResponsiveHeaderActive: boolean;
  toggleResponsiveHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ResponsiveHeaderContext =
  createContext<IResponsiveHeaderContext | null>(null);

export const ResponsiveHeaderContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [isResponsiveHeaderActive, toggleResponsiveHeader] = useState(false);
  return (
    <ResponsiveHeaderContext.Provider
      value={{ isResponsiveHeaderActive, toggleResponsiveHeader }}
    >
      {children}
    </ResponsiveHeaderContext.Provider>
  );
};
