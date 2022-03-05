import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/botton-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Screens
import Splash from "../splash";
import Login from "../login";
import HomeScreen from "../mainScreen/homeScreen";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const HomeStackNavigator = createStackNavigator();

function MyStack(){
    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
            <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen}></HomeStackNavigator.Screen>
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator 
        initialRouteName = "Inicio" 
        screenOptions = {{
            tabBarActiveTintColor: '#697fa3'
        }}>
            <Tab.Screen
            name="HomeScreen"
            component = {MyStack}
            options = {{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({ color, siza }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}></MaterialCommunityIcons>
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