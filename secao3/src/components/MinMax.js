import React from 'react';
import {Text} from 'react-native';
import Style from './style';

export default ({num1, num2}) => {
  let min = 0;
  let max = 0;
  if (num1 > num2) {
    min = num2;
    max = num1;
  } else {
    min = num1;
    max = num2;
  }
  return (
    <Text style={Style.txtG}>
      O valor {max} é maior que o valor {min}!
    </Text>
  );
};
