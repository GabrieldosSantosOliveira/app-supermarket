import { NavigationContainer } from '@react-navigation/native';
import { Host } from 'react-native-portalize';

import { StackRoutes } from './stack';
export const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
