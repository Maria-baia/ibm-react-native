import React from 'react';
import {Text} from 'react-native';
import Style from './style';

function Comp() {
  return <Text style={Style.txtG}>Comp #Oficial</Text>;
}

function Comp1() {
  return <Text style={Style.txtG}>Comp #01</Text>;
}

function Comp2() {
  return <Text style={Style.txtG}>Comp #02</Text>;
}

export {Comp1, Comp2};
export default Comp;
