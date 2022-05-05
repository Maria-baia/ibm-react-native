import React from 'react';
import {Text} from 'react-native';
import Style from './style';

export default props => {
  let min = 0;
  let max = 0;
  if (props.num1 > props.num2) {
    min = props.num2;
    max = props.num1;
  } else {
    min = props.num1;
    max = props.num2;
  }
  return (
    <Text style={Style.txtG}>
      O valor {max} é maior que o valor {min}!
    </Text>
  );
};
