import { createContext, ReactNode } from "react";
import { useBoolean } from "../hooks/useBooleanHook";

interface IAuthContextType {
  loginForm: boolean;
  switchForms: () => void;
}

interface IAuthContextProviderProps {
  children: ReactNode;
}

export const AuthFormContext = createContext<IAuthContextType | null>(null);

export const AuthFormContextProvider: React.FC<IAuthContextProviderProps> = ({
  children,
}) => {
  const [loginForm, switchForms] = useBoolean(true);

  return (
    <AuthFormContext.Provider value={{ loginForm, switchForms }}>
      {children}
    </AuthFormContext.Provider>
  );
};
