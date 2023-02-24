import {
  createStackNavigator,
  StackCardInterpolatedStyle,
  StackCardInterpolationProps,
  TransitionPresets,
} from '@react-navigation/stack';
import { Platform, Animated } from 'react-native';

import { Help } from '../screens/Help';
import { Home } from '../screens/Home';
import { Register } from '../screens/Register';
const { Navigator, Screen } = createStackNavigator();

export const StackRoutes = () => {
  const { add, multiply } = Animated;

  console.log(TransitionPresets.ModalPresentationIOS);
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="email" component={Register} />
      <Screen
        name="help"
        component={Help}
        options={{
          presentation: 'modal',
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </Navigator>
  );
};
