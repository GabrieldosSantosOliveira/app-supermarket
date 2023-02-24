import { VStack, Text, Icon } from 'native-base';
import { Envelope } from 'phosphor-react-native';

import { ButtonPrimary } from '../../components/Button/ButtonPrimary';
import { Input } from '../../components/Input';
export const Email = () => {
  return (
    <VStack
      flex={1}
      justifyContent="space-between"
      alignItems="center"
      px={5}
      w="full"
      pb={5}
      pt={3}
    >
      <VStack w="full">
        <Text>Email</Text>
        <Input placeholder="Email" InputLeftElement={<Icon as={Envelope} />} />

        <Text>Senha</Text>

        <Input placeholder="Email" InputLeftElement={<Icon as={Envelope} />} />
      </VStack>
      <ButtonPrimary>Confirmar</ButtonPrimary>
    </VStack>
  );
};
