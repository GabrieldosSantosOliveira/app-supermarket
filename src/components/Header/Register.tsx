import { useNavigation } from '@react-navigation/native';
import {
  HStack,
  IconButton,
  VStack,
  Icon,
  Text
} from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

import { useTheme } from '../../hooks/useTheme';
export const Header = () => {
  const { goBack } = useNavigation();
  const { colorMode } = useTheme();
  return (
    <HStack
      h="14"
      w="full"
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      alignItems="center"
      justifyContent="space-between"
    >
      <IconButton
        onPress={goBack}
        h="full"
        icon={
          <CaretLeft
            weight="bold"
            size={30}
            color={colorMode === 'dark' ? 'white' : 'black'}
          />
        }
      />
    </HStack>
  );
};
