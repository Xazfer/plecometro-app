import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

//Screens
import Login from "../login";
import Splash from "../splash";
import HomeScreen from "../mainScreen/homeScreen";
import App2 from "../app2";
import History from "../history/history";

const HomeStackNavigator = createStackNavigator();

function MyStack(){
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="Splash"
        >
            <HomeStackNavigator.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    headerShown: false,
                }}>
            </HomeStackNavigator.Screen>
            <HomeStackNavigator.Screen 
                name="Login" 
                component={Login}
                options={{
                    headerShown: false,
                }}>
            </HomeStackNavigator.Screen>
            <HomeStackNavigator.Screen 
                name="Splash"
                component={Splash}
                options={{
                    headerShown: false,
                }}>
            </HomeStackNavigator.Screen>
            <HomeStackNavigator.Screen 
                name="App2"
                component={App2}
                options={{
                    headerShown: false,
                }}>
            </HomeStackNavigator.Screen>
        </HomeStackNavigator.Navigator>
    )
}

export default function Navegation() {
    return(
        <NavigationContainer>
            <MyStack></MyStack>
        </NavigationContainer>
    )
}