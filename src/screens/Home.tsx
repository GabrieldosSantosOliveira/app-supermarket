import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { View, PixelRatio, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Defs, Path, ClipPath, Use } from 'react-native-svg';

import { ButtonSecondary } from '../components/Button/ButtonSecondary';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import ShoppingCartLoader from './../animation/ShoppingCartLoader.json';
export const Home = () => {
  const { colorMode } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colorMode === 'dark' ? '#040f13' : 'white',
        paddingHorizontal: 24,
        paddingTop: insets.top + 24,
        paddingBottom: insets.bottom + 24,
        paddingLeft: insets.left + 32,
        paddingRight: insets.right + 32,
      }}
    >
      <LottieView
        source={ShoppingCartLoader}
        autoPlay
        resizeMode="contain"
        loop
        style={{ marginBottom: 60 }}
      />
      <View style={{ marginTop: 500 }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 24,
            fontFamily: 'Roboto_700Bold',
          }}
        >
          O supermercado inteiro em suas mãos
        </Text>
        <Text style={{ color: 'white', textAlign: 'center' }}>
          entregamos na velocidade da luz
        </Text>
        <ButtonSecondary>
          <View style={{ width: '100%', backgroundColor: 'red' }}>
            <Text style={{ color: 'red' }}>jjj</Text>
          </View>
        </ButtonSecondary>
      </View>
    </View>
  );
};
