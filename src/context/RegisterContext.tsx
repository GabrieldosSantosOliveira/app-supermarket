import { createContext, FC, ReactNode } from 'react';
export const RegisterContext = createContext({});
interface IRegisterProvider {
  children: ReactNode;
}
export const RegisterProvider: FC<IRegisterProvider> = ({ children }) => {
  return (
    <RegisterContext.Provider value={{}}>{children}</RegisterContext.Provider>
  );
};
