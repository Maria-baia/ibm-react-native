import React, {useState} from 'react';
import Filho from './Filho';
import {Text} from 'react-native';
import Style from '../style';

export default props => {
  const [num, setNum] = useState(0);
  const [texto, setTexto] = useState('');
  const exibirValor = (numero, inicio) => {
    setNum(numero);
    setTexto(inicio);
  };
  return (
    <>
      <Text style={Style.txtG}>
        {texto}
        {num}
      </Text>
      <Filho funcao={exibirValor} min={1} max={60} />
    </>
  );
};
