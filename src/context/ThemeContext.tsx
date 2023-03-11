import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

import { setStorage } from '../services/setStorage';
import { getStorage } from './../services/getStorage';
type IThemeContext = {
  colorMode: 'dark' | 'light';
};
export const ThemeContext = createContext({} as IThemeContext);
interface IThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [colorMode, setColorMode] = useState<'dark' | 'light'>('dark');
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
    <ThemeContext.Provider value={{ colorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
