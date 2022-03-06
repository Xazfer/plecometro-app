import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
  // <SafeAreaProvider> 
     <View style={styles.container}>
       <View style={styles.inputContainer}>
      <View style={styles.form}>
        <Text style={styles.text}>Nombre</Text>
      <TextInput style={(styles.input)} placeholder="Nombre" />
      <Text style={styles.text}>Correo</Text>
      <TextInput style={(styles.input)} placeholder="Correo" />
      <Text style={styles.text}>Contraseña</Text>
      <TextInput style={(styles.input)} placeholder="Contraseña"/>
      <Text style={styles.text}>Lugar</Text>
      <TextInput style={(styles.input)} placeholder="Lugar de residencia" />
      
      <StatusBar style="auto" />
      
      <TouchableOpacity style={styles.containerBtn}>
                  
                        <Text style={styles.text}>Registrarse</Text>
      </TouchableOpacity>
    
      </View>
      </View>
    </View>
   // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eae7e3',

  },
  inputContainer: {
    //alignself:flex,
    flex: 3,
    marginTop: 5,
    marginBottom:'40%',
    borderRadius: 40,
 
    backgroundColor: '#697fa3'
  },
  form: {
    flex: 1,
    marginTop: '15%',
    marginLeft:'5%',
    marginRight:'5%',
  },

  input:{
    height: 50,
   // borderWidth:2,
    //marginTop:'5%',
    marginBottom:'3%',
   
    borderColor:'black',
    borderRadius: 10,
    backgroundColor:'white',
},
  text:{
    fontSize:'20px',
    fontFamily:'Comic Sans MS',
    //colorFamily:'#9abcdd',
  },

  containerBtn:{
    borderRadius: 10,
    marginTop: 30,
    padding:10,
    alignItems: 'center',
    backgroundColor:'#9abcdd'
  }


  
});
