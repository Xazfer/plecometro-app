import React, { Component } from 'react'
import { Stylesheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable'
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
        return(
            <LinearGradient colors={['#9abcdd', '#eae7e3']} style={styles.backgradient}>
                <View style = {Stylesheet.container}>
                    <Animatable.Image 
                        animation="pulse" 
                        easing="ease-out" 
                        iterationCount="infinite" 
                        style={{width: 200, height: 200, margin: 100,}}
                        source = {require("../images/plecometro.png")}
                    >
                    </Animatable.Image>
                    <Text style = {Stylesheet.title}>Plecómetro</Text>
                </View>
            </LinearGradient>
        )
    }
}

const styles = Stylesheet.create({
    backgradient: {
        display: flex,
        flex: 1,
    },
    container: {
        display: flex,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSiza: 18,
        color: '#000000'
    }
})