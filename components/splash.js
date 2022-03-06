import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

export default class Splash extends Component {
    goToScreen(routeName){
        this.props.navigation.navigate(routeName)
    }

    componentDidMount(){
        setTimeout( () => {
            this.goToScreen('Login')
        }, 5000, this)
    } 

    render() {
        return (
            <LinearGradient colors={['#9abcdd', '#eae7e3']} style={styles.backgradient}>
                <View style={styles.container}>
                    <Animatable.Image
                        animation="pulse"
                        easing="ease-out"
                        iterationCount="infinite"
                        style={{ width: 200, height: 200, margin: 100, }}
                        source={require("../images/plecometro.png")}
                    >
                    </Animatable.Image>
                    <Text style={styles.title}>Plecómetro</Text>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    backgradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#000000',
    }
})