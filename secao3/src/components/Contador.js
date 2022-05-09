import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import Style from './style';

export default ({inicial = 0, passo = 1}) => {
  const [numero, setNumero] = useState(inicial);
  const inc = () => {
    setNumero(numero + passo);
  };
  const dec = () => {
    setNumero(numero - passo);
  };
  return (
    <>
      <Text style={Style.txtG}>{numero}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  );
};
