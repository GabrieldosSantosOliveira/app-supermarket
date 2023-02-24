import { useNavigation } from '@react-navigation/native';
import { HStack, IconButton, Pressable, Progress, Text } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';
import { useRef } from 'react';
import { Modalize } from 'react-native-modalize';

import { useTheme } from '../../hooks/useTheme';
import { Help } from './../../screens/Help';
export const Header = () => {
  const { goBack, navigate } = useNavigation();
  const { colorMode } = useTheme();
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <HStack
      borderBottomRadius={20}
      h="16"
      w="full"
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      px={3}
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
      <Progress flex={1} value={50} m={5} />

      <Pressable onPress={() => navigate('help')}>
        <Text color="blue.500" fontSize="14">
          Ajuda
        </Text>
      </Pressable>
    </HStack>
  );
};
