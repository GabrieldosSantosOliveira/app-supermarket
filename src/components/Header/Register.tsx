import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  PixelRatio,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useTheme } from '../../hooks/useTheme';
export const Header = () => {
  const { navigate, goBack } = useNavigation();
  const { colorMode } = useTheme();
  return (
    <View
      style={{
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomStartRadius: 20,
        height: PixelRatio.getPixelSizeForLayoutSize(64),
        width: '100%',
        backgroundColor: colorMode === 'dark' ? '#27272a' : 'white',
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <TouchableOpacity onPress={goBack}>
        <FontAwesome
          name="caret-left"
          weight="bold"
          size={30}
          color={colorMode === 'dark' ? 'white' : 'black'}
        />
      </TouchableOpacity>

      <View></View>
      <Pressable onPress={() => navigate('help')}>
        <Text style={{ color: '#3b82f6', fontSize: 56 }}>Ajuda</Text>
      </Pressable>
    </View>
  );
};
