import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splash from './components/Splash';
import StackNavigation from './components/navigation/StackNavigation'
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});