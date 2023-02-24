import { IColorModeContextProps, useColorMode } from 'native-base';
import { createContext, FC, ReactNode, useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { setStorage } from '../services/setStorage';
import { getStorage } from './../services/getStorage';
type IThemeContext = IColorModeContextProps;
export const ThemeContext = createContext({} as IThemeContext);
interface IThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const { setColorMode, ...rest } = useColorMode();
  useEffect(() => {
    async function getInterfaceColor() {
      let colorSave = await getStorage<'dark' | 'light' | 'automatic'>(
        '@colorMode',
      );
      if (!colorSave) {
        setStorage('@colorMode', 'automatic');
        colorSave = 'automatic';
      }

      if (colorSave === 'automatic') {
        if (colorScheme === 'dark') {
          setColorMode('dark');
        } else {
          setColorMode('light');
        }
      } else {
        if (colorSave === 'dark') {
          setColorMode('dark');
        } else {
          setColorMode('light');
        }
      }
    }
    getInterfaceColor();
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{ setColorMode, ...rest }}>
      {children}
    </ThemeContext.Provider>
  );
};
