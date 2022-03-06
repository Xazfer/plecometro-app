import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { Component } from 'react/cjs/react.development';

export default class HomeScreen extends Component() {
    render() {
        return (
            <View>
                <Text style={{textAlign: 'center'}}>Inicio de Plecómetro</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});