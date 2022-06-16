import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default ({route}) => {
  const numero = (route.params && route.params.numero) || 0;
  return <TextoCentral corFundo="#7D5C65">Tela C - {numero}</TextoCentral>;
};
