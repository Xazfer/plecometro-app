import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')

export default function Login() {
    const navigation = useNavigation();

    function SvgTop() {
        return (
            <Svg
                width={500}
                height={324}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
                    fill="url(#prefix__paint0_linear_103:6)"
                    fillOpacity={0.5}
                />
                <Path
                    d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
                    fill="url(#prefix__paint1_linear_103:6)"
                />
                <Defs>
                    <LinearGradient
                        id="prefix__paint0_linear_103:6"
                        x1={492.715}
                        y1={231.205}
                        x2={480.057}
                        y2={364.215}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#97C2C1" />
                        <Stop offset={1} stopColor="#9abcdd" />
                    </LinearGradient>
                    <LinearGradient
                        id="prefix__paint1_linear_103:6"
                        x1={7.304}
                        y1={4.155}
                        x2={144.016}
                        y2={422.041}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#97C2C1" />
                        <Stop offset={1} stopColor="#9abcdd" />
                    </LinearGradient>
                </Defs>
            </Svg>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerSVG}>
                <SvgTop>
                    
                </SvgTop>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.subTitle}>Inicio de sesión</Text>
                <TextInput style={styles.textInput} placeholder='correo@email.com'></TextInput>
                <TextInput style={styles.textInput} placeholder='contraseña' secureTextEntry={true}></TextInput>
                <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                <TouchableOpacity style={styles.containerBtn} onPress={() => navigation.navigate("App2")}>
                    <Text style={styles.text}>Iniciar sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.forgotPassword}>¿Aún no tienes cuenta?</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#eae7e3',
    },
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerSVG: {
        flex: 2,
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    containerPleco: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pleco: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    title: {
        fontSize: 40,
        color: '#000000',
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 20,
        color: '#a7a7a7',
    },
    textInput: {
        width: '80%',
        height: 50,
        padding: 10,
        paddingStart: 30,
        marginTop: 20,
        borderRadius: 25,
        backgroundColor: '#ffffff',
    },
    forgotPassword: {
        fontSize: 14,
        color: '#c9c9c9',
        marginTop: 20,
    },
    containerBtn: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        borderRadius: 25,
        borderWidth: 2,
        backgroundColor: "#cad8d2"
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});