import 'react-native-gesture-handler';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Loading } from './src/components/Loading';
import { StatusBar } from './src/components/StatusBar';
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext';
import { Routes } from './src/routes';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <StatusBar />
          {fontsLoaded ? <Routes /> : <Loading />}
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
