import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Register } from '../screens/Register';
const { Navigator, Screen, Group } =
  createNativeStackNavigator();
export const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="email" component={Register} />
    </Navigator>
  );
};
