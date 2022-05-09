import React from 'react';
import {Text} from 'react-native';
import Style from '../style';

export default ({nome, sobrenome}) => {
  return (
    <Text style={Style.txtG}>
      {nome} {sobrenome}
    </Text>
  );
};
