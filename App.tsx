import {ThemeProvider} from 'styled-components'
import theme from './src/theme'
import {useFonts, Inter_400Regular, Inter_700Bold} from "@expo-google-fonts/inter"
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});


  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        { fontsLoaded ? <Routes/> : <Loading/> }
    </ThemeProvider>
  );
}