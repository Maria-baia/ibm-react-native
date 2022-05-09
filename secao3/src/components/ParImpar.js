import React from 'react';
import {Text} from 'react-native';
import Style from './style';

export default ({num = 0}) => {
  return (
    <>
      <Text style={Style.txtG}>O resultado é: </Text>
      <Text style={Style.txtG}>{num % 2 === 0 ? 'Par' : 'Ímpar'}</Text>
    </>
  );
};
