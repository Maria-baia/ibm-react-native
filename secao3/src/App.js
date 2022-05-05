import React from 'react';
import {View, StyleSheet} from 'react-native';
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';

export default () => {
  return (
    <View style={style.App}>
      <MinMax num1={Aleatorio()} num2={Aleatorio()} />
      <MinMax num1={Aleatorio()} num2={Aleatorio()} />
      {/* <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
    </View>
  );
};

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
