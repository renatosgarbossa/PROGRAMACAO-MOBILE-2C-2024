// app.js

import React, { useState } from 'react';
import { Image, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { estilo } from './estilo';

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleContinue = () => {
        // Implement your logic for the "Continue" button here
        console.log('Continue button clicked!');
    };

    return (
        <ScrollView style={estilo.container}>
            <View style={estilo.image}>
                <Image
                    source={require('./assets/FitPro.png')}
                    style={estilo.logo}
                />
            </View>
            <View>
                <Text style={estilo.h1}>Cadastro</Text>
            </View>
            <View>
                <Text style={estilo.textoLabel}>Nome</Text>
                <TextInput
                    placeholder='Insira seu nome'
                    style={estilo.textoInput}
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View>
                <Text style={estilo.textoLabel}>E-mail</Text>
                <TextInput
                    placeholder='Insira seu e-mail'
                    style={estilo.textoInput}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View>
                <Text style={estilo.textoLabel}>Senha</Text>
                <TextInput
                    placeholder='Insira sua senha'
                    style={estilo.textoInput}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View>
                <Text style={estilo.textoLabel}>Telefone</Text>
                <TextInput
                    placeholder='Insira seu telefone'
                    style={estilo.textoInput}
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={estilo.link}> ja possui uma conta? faça login</Text>
                </TouchableOpacity>
            </View>
            <View style={estilo.buttonContainer}>
                <TouchableOpacity style={estilo.continueButton} onPress={handleContinue}>
                    <Text style={estilo.continueButtonText}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default App;
