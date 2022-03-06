import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Screens
import Splash from "../splash";
import Login from "../login";
import HomeScreen from "../mainScreen/homeScreen";
import Register from "../register";
import History from "../history/history";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return (
        <HomeStackNavigator.Navigator initialRouteName="Splash">
            <HomeStackNavigator.Screen name="Splash" component={Splash}></HomeStackNavigator.Screen>
            <HomeStackNavigator.Screen name="Login" component={Login}></HomeStackNavigator.Screen>
            <HomeStackNavigator.Screen name="Register" component={Register}></HomeStackNavigator.Screen>
            <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen}></HomeStackNavigator.Screen>
            <HomeStackNavigator.Screen name="History" component={History}></HomeStackNavigator.Screen>
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator 
        initialRouteName = "Splash" 
        screenOptions = {{
            tabBarActiveTintColor: '#697fa3'
        }}>
            <Tab.Screen
            name="Login"
            component = {MyStack}
            options = {{
                tabBarLabel: 'Inicio de seisón',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}></MaterialCommunityIcons>
                ),
                //tabBarBadge: 2,
                headerShown: false,
            }}
            />
            <Tab.Screen
            name="HomeScreen"
            component = {MyStack}
            options = {{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}></MaterialCommunityIcons>
                ),
                //tabBarBadge: 2,
                headerShown: false,
            }}
            />
            <Tab.Screen
            name="History"
            component = {MyStack}
            options = {{
                tabBarLabel: 'Historial',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="history" color={color} size={size}></MaterialCommunityIcons>
                ),
                //tabBarBadge: 2,
                headerShown: false,
            }}
            />
        </Tab.Navigator>
    );
}

export default function StackNavigation(){
    return(
        <NavigationContainer>
            <MyTabs></MyTabs>
        </NavigationContainer>
    );
}