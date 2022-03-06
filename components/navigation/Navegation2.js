import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Screens
import HomeScreen from "../mainScreen/homeScreen";
import History from "../history/history";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Inicio"
        >
            <Tab.Screen
                name="Inicio"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    ),
                    headerShown: false,
                }}>
            </Tab.Screen>
            <Tab.Screen
                name="Historial"
                component={History}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="history" size={size} color={color} />
                    ),
                    headerShown: false,
                }}>
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default function Navegation2() {
    return (
        <MyTabs></MyTabs>
    )
}