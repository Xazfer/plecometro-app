import React, { Component } from 'react'
import { Text } from 'react-native'

export default function App() {
    return (
        <View>
            <Text style={{textAlign: 'center'}}>Bienvenido al Login de Plecómetro</Text>
        </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  