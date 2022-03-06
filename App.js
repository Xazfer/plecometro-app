import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Splash from './components/splash';
import StackNavigation from './components/navigation/StackNavigation'
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaProvider>
      <Splash></Splash>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
