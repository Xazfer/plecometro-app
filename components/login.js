import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Svg, { G, Rect, Circle, Defs, ClipPath } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window')

export default function App() {

    function SvgTop() {
        return (
            <Svg
                width={375}
                height={812}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <G clipPath="url(#a)">
                    <Rect width={375} height={812} rx={48} fill="#fff" />
                    <G filter="url(#b)">
                        <Circle cx={187} cy={251} r={164} fill="#97C2C1" fillOpacity={0.75} />
                    </G>
                </G>
                <Defs>
                    <ClipPath id="a">
                        <Rect width={375} height={812} rx={48} fill="#fff" />
                        </ClipPath>
                </Defs>
            </Svg>
        )
    }
    return (
        <View style = {styles.mainContainer}>
            <View style = {styles.containerSVG}>
                <SvgTop></SvgTop>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.title}>Bienvenido</Text>
                <Text style = {styles.subTitle}>Iniciar sesión en su cuenta</Text>
                <TextInput style = {styles.textInput} placeholder='correo@email.com'></TextInput>
                <TextInput style = {styles.textInput} placeholder='contraseña' secureTextEntry={true}></TextInput>
                <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                <TouchableOpacity style={styles.containerBtn}>
                    <LinearGradient style={styles.btnSignIn} colors={['#9abcdd', '#97c2c1']} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                        <Text style={styles.text}>Iniciar sesión</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.forgotPassword}>Registrarse</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerSVG: {
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        color: '#000000',
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 20,
        color: '#c9c9c9',
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
        flex: 1,
        width: 250,
        alignItems: 'center',
        marginTop: 50,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    btnSignIn: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
    }
});
  