import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { VStack, Text, Icon, HStack, View, Heading } from 'native-base';
import { ArrowRight } from 'phosphor-react-native';

import { ButtonSecondary } from '../components/Button/ButtonSecondary';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import ShoppingCartLoader from './../animation/ShoppingCartLoader.json';
import GoogleLogo from './../assets/Google.svg';
export const Home = () => {
  const { singInWithGoogle, isUserLoading } = useAuth();
  const { colorMode } = useTheme();
  const { navigate } = useNavigation();
  return (
    <VStack
      flex={1}
      alignItems="center"
      justifyContent="space-between"
      bg={colorMode === 'dark' ? 'gray.900' : 'white'}
      px={6}
      py={8}
      safeArea
    >
      <LottieView
        source={ShoppingCartLoader}
        autoPlay
        resizeMode="contain"
        loop
        style={{ marginBottom: 60 }}
      />
      <VStack mt={8} w="full">
        <Heading textAlign="center" my={4}>
          O supermercado inteiro em suas mãos
        </Heading>
        <Text my={4} textAlign="center">
          entregamos na velocidade da luz
        </Text>
        <ButtonSecondary
          onPress={singInWithGoogle}
          activeOpacity={0.6}
          isLoading={isUserLoading}
          style={{ marginTop: 20 }}
        >
          <HStack
            bg="blue.500"
            alignItems="center"
            h={14}
            rounded="md"
            justifyContent="space-between"
            px={4}
          >
            <View
              bg="white"
              rounded="md"
              h={10}
              w={10}
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={GoogleLogo} size={6} />
            </View>
            <Text color="white">Entrar com o Google</Text>
            <Icon as={<ArrowRight weight="bold" size={30} />} />
          </HStack>
        </ButtonSecondary>
        <ButtonSecondary
          onPress={() => navigate('email')}
          activeOpacity={0.6}
          isLoading={isUserLoading}
          _loading={{
            bg: 'white',
          }}
          isLoadingSpinnerProps={{
            color: 'black',
          }}
          style={{ marginTop: 20 }}
        >
          <HStack
            bg={colorMode === 'dark' ? 'white' : 'black'}
            alignItems="center"
            h={14}
            rounded="md"
            justifyContent="space-between"
            px={4}
          >
            <Text color={colorMode === 'dark' ? 'black' : 'white'}>
              Entrar com o Email
            </Text>
            <Icon
              as={
                <ArrowRight
                  weight="bold"
                  color={colorMode === 'dark' ? 'black' : 'white'}
                  size={30}
                />
              }
            />
          </HStack>
        </ButtonSecondary>
      </VStack>
    </VStack>
  );
};
