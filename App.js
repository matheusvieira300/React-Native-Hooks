import React from 'react';
import { SafeAreaView } from 'react-native';


import Home from './src/telas/Home';

function App(){ //Safe Area View para ele reconhecer a parte de cima e de baixo do celular no IOS 
  return <SafeAreaView>
    <Home />
  </SafeAreaView>
}

export default App;