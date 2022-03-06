import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

//Screens
import Splash from "../splash";
import Login from "../login";
import Register from "../register";
import App2 from "../app2";

const HomeStackNavigator = createStackNavigator();

function MyStack(){
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="Splash"
        >
            <HomeStackNavigator.Screen 
                name="Splash"
                component={Splash}
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
                name="Register" 
                component={Register} 
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