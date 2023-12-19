import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';


import Home from './src/telas/Home';

function App(){ //Safe Area View para ele reconhecer a parte de cima e de baixo do celular no IOS 
  return <SafeAreaView style={estilos.tela}>
    <Home />
  </SafeAreaView>
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1 //faz com que o componente se expanda o máximo que ele puder
  }
})

export default App;