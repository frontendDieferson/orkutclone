/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import images from './src/res/images';
import colors from './src/res/colors';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={Styles.container}>
        <View style={Styles.logoContainer}>
          <Image source={images.logo} style={{width: 202, height: 60}} />
        </View>
        <View style={Styles.userNameContainer}>
          <TextInput
            style={Styles.userNameInput}
            placeholder="Nome de Usuário ou email"
            placeholderTextColor={colors.textFaded2}
          />
        </View>
        <View style={Styles.passwordContainer}>
          <TextInput
            style={Styles.passwordInput}
            placeholder="Senha"
            placeholderTextColor={colors.textFaded2}
          />
        </View>
        <View style={Styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={Styles.forgotPasswordText}>Esqueceu sua Senha?</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.loginContainer}>
          <TouchableOpacity>
            <Text style={Styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={{marginLeft: 10, marginRight: 10, color: '#ED2590'}}>
            OU
          </Text>
        </View>

        <View
          style={{
            //flex: 0.1,
            marginTop: 40,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={images.googleLogo} style={{width: 20, height: 20}} />
          <TouchableOpacity style={{alignItems: 'center', marginStart: 10}}>
            <Text style={{color: '#ED2590'}}>Faça login com o Google</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 60,
          }}>
          <Text style={{color: '#969696'}}>Não tem conta?</Text>
          <TouchableOpacity>
            <Text style={{color: '#ED2590'}}> Inscreva-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,
  },
  userNameContainer: {
    borderColor: '#ED2590',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  userNameInput: {
    marginStart: 10,
    color: '#D65B99',
    alignItems: 'center',
    textAlign: 'center',
  },
  passwordContainer: {
    borderColor: '#ED2590',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  passwordInput: {
    marginStart: 10,
    color: '#D65B99',
    alignItems: 'center',
    textAlign: 'center',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginEnd: 20,
  },
  forgotPasswordText: {
    color: '#D65B99',
  },
  loginContainer: {
    alignItems: 'center',
    height: 50,
    marginTop: 30,
    backgroundColor: '#ED2590',
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 8,
  },
  loginText: {
    color: '#fff',
  },
});

export default App;
