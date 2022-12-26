import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';

import { Loading } from './src/components/Loading';
import { StatusBar } from './src/components/StatusBar';
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext';
import { Routes } from './src/routes';
import { THEME } from './src/styles/theme';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  return (
    <NativeBaseProvider theme={THEME}>
      <ThemeProvider>
        <AuthProvider>
          <StatusBar />
          {fontsLoaded ? <Routes /> : <Loading />}
        </AuthProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
