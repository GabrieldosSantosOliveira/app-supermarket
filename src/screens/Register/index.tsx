import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '../../components/Header/Register';
import { useRegister } from '../../hooks/useRegister';
import { useTheme } from '../../hooks/useTheme';
import { RegisterProvider } from './../../context/RegisterContext';
import { Email } from './Email';
export const Register = () => {
  const value = useRegister();
  const { colorMode } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <RegisterProvider>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: colorMode === 'dark' ? '#040f13' : 'white',
        }}
      >
        <Header />
        <Email />
      </View>
    </RegisterProvider>
  );
};
