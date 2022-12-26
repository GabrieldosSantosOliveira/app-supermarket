import { VStack } from 'native-base';

import { Header } from '../../components/Header/Register';
import { useRegister } from '../../hooks/useRegister';
import { useTheme } from '../../hooks/useTheme';
import { RegisterProvider } from './../../context/RegisterContext';
import { Email } from './Email';
export const Register = () => {
  const value = useRegister();
  console.log('VALUES', value);
  const { colorMode } = useTheme();
  return (
    <RegisterProvider>
      <VStack
        safeArea
        flex={1}
        justifyContent="center"
        alignItems="center"
        bg={colorMode === 'dark' ? 'gray.900' : 'white'}
      >
        <Header />
        <Email />
      </VStack>
    </RegisterProvider>
  );
};
