import { createContext, ReactNode } from "react";
import { useState } from "react";

interface IResponsiveHeaderContext {
  isResponsiveHeaderActive: boolean;
  toggleResponsiveHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IContextProviderProps {
  children: ReactNode;
}

export const ResponsiveHeaderContext =
  createContext<IResponsiveHeaderContext | null>(null);

export const ResponsiveHeaderContextProvider: React.FC<
  IContextProviderProps
> = ({ children }) => {
  const [isResponsiveHeaderActive, toggleResponsiveHeader] = useState(false);
  return (
    <ResponsiveHeaderContext.Provider
      value={{ isResponsiveHeaderActive, toggleResponsiveHeader }}
    >
      {children}
    </ResponsiveHeaderContext.Provider>
  );
};
