// App.js

import React from 'react';
import { Image, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { estilo } from './estilos';

const App = () => {
    return(
        <ScrollView style={estilo.container}>
            <View style={estilo.image}>
                <Image
                    source={require('./assets/FitPro.png')}
                    style={estilo.logo}
                />
            </View>
            <View>
                <Text style={estilo.h1}>Login</Text>
            </View>
            <View>
              <Text style={estilo.textoLabel}>Usuario</Text>
              <TextInput
                placeholder='Insira seu usuário'
                style={estilo.textoInput}
              />
            </View>
            <View>
              <Text style={estilo.textoLabel}>Senha</Text>
              <TextInput
                placeholder='Insira sua senha'
                style={estilo.textoInput}
                secureTextEntry={true}
              />
            </View>
            <View>
              <TouchableOpacity>
                <Text style={estilo.link}>Esqueci a senha</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
        
    );
}

export default App;

*/style*/

export const estilo = {
  container:{
    flex: 1,
    backgroundColor: '#ffffff'
  },
  image:{
    alignSelf:'center',
    marginTop:20,
    marginBottom: 20
  },
  logo: {
    width: 270,
    height: 140
  },
  h1: {
    fontSize: 40,
    textAlign: 'center'
  },
  textoLabel:{
    fontSize: 14,
    color: '#000000',
    marginLeft: 20,
    marginBottom: 15,
    marginTop: 15
  },
  textoInput:{
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#000',
    width: 300,
    marginLeft: 20,
    padding: 10,
    borderRadius: 5
  },
  link: {
    color: '#000000',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10
  }
}

