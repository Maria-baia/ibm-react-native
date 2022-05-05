import React from 'react';
import {Text} from 'react-native';

const Aleatorio = ({max, min}) => {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return <Text>Número aleatório: {num}</Text>;
};

export default Aleatorio;
