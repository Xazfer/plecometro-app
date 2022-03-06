import React, { Component } from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default class History extends Component() {
    render() {
        return (
            <View>
                <Text style={{textAlign: 'center'}}>Historial de Plecómetro</Text>
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});