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

