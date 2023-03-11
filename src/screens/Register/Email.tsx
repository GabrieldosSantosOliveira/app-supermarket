import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ButtonPrimary } from '../../components/Button/ButtonPrimary';
import { Input } from '../../components/Input';
export const Email = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%',
        paddingBottom: insets.bottom + 20,
        paddingTop: insets.top + 15,
        paddingRight: insets.right,
        paddingLeft: insets.left,
      }}
    >
      <View style={{ width: '100%' }}>
        <Text>Email</Text>
        <Input placeholder="Email" />

        <Text>Senha</Text>

        <Input placeholder="Email" />
      </View>
      <ButtonPrimary>Confirmar</ButtonPrimary>
    </View>
  );
};
