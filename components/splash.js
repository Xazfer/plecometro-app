import React, { Component } from 'react'
import { Stylesheet, Text, View } from 'react-native'
export default class Splash extends Component {
    render() {
        return(
            <View style = {Stylesheet.container}>
                <Text style = {Stylesheet.title}>Plecómetro</Text>
            </View>
        )
    }
}

const styles = Stylesheet.create({
    container: {
        backgroundColor: '#f0f0f0',
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