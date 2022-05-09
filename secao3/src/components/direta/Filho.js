import React from 'react';
import {Text} from 'react-native';
import Style from '../style';

export default ({a, b}) => {
  return (
    <>
      <Text style={Style.txtG}>{a}</Text>
      <Text style={Style.txtG}>{b}</Text>
    </>
  );
};
