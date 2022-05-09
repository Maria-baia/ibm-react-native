import React from 'react';
import {Button} from 'react-native';

export default ({min, max, funcao}) => {
  const gerarNumero = (minimo, maximo) => {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  };
  const exec = () => {
    const n = gerarNumero(min, max);
    funcao(n, 'O valor é ');
  };
  return (
    <>
      <Button title="Executar" onPress={exec} />
    </>
  );
};
