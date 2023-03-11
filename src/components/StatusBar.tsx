import { FC } from 'react';
import {
  StatusBar as ReactNativeStatusBar,
  StatusBarProps,
} from 'react-native';

import { useTheme } from '../hooks/useTheme';
export const StatusBar: FC<StatusBarProps> = ({ ...props }) => {
  const { colorMode } = useTheme();
  return (
    <ReactNativeStatusBar
      translucent
      backgroundColor="transparent"
      barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
      {...props}
    />
  );
};
