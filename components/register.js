import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flex: .5}}></View> 
      <StatusBar style="auto" />
      <View elevation={5} style={styles.inputContainer}>
          <View style={styles.form}>
            <Text style={styles.text}>Nombre</Text>
            <TextInput style={(styles.input)} placeholder="Nombre" />
            <Text style={styles.text}>Correo electrónico</Text>
            <TextInput style={(styles.input)} placeholder="Correo electrónico" />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput style={(styles.input)} placeholder="Contraseña"/>
            <Text style={styles.text}>Repetir contraseña</Text>
            <TextInput style={(styles.input)} placeholder="Repetir contraseña"/>
            <Text style={styles.text}>Lugar</Text>
            <TextInput style={(styles.input)} placeholder="Lugar de residencia" />
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity style={styles.containerBtn} onPress={() => navigation.navigate("App2")}>
                <Text style={styles.text}>Registrarse</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eae7e3',
  },
  inputContainer: {
    flex: 3,
    width: '90%',
    marginTop: 10,
    marginBottom:'40%',
    borderRadius: 40,
    backgroundColor: '#cad8d2',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 10,
    shadowOpacity: .8
  },
  form: {
    flex: 1,
    marginTop: '15%',
    marginLeft:'5%',
    marginRight:'5%',
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    paddingStart: 30,
    borderRadius: 25,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000',
  },
  containerBtn: {
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    borderRadius: 25,
    borderWidth: 2,
    backgroundColor: "#9abcdd",
    marginBottom: 20
  },
});
