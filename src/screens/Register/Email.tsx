import LottieView from 'lottie-react-native';
import { VStack, Text, Icon } from 'native-base';
import { Envelope } from 'phosphor-react-native';

import { ButtonPrimary } from '../../components/Button/ButtonPrimary';
import { Header } from '../../components/Header/Register';
import { Input } from '../../components/Input';
import { useTheme } from '../../hooks/useTheme';
import Success from './../../animation/success.json';
export const Email = () => {
  const { colorMode } = useTheme();
  return (
    <VStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      px={5}
      w="full"
    >
      <Input InputLeftElement={<Icon as={Envelope} />} />
      <ButtonPrimary>Confirmar</ButtonPrimary>
      {/* <LottieView
        source={Success}
        autoPlay
        resizeMode="contain"
        loop
        autoSize
      /> */}
    </VStack>
  );
};
