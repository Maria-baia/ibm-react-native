import React from 'react';
import {Text} from 'react-native';
import Style from './style';

export default ({principal, secondary}) => {
  return (
    <>
      <Text style={Style.txtG}>{principal}</Text>
      <Text>{secondary}</Text>
    </>
  );
};
