import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Style from '../style';

export default ({num}) => {
  return (
    <View style={style.Container}>
      <Text style={[Style.txtG, style.Num]}>{num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    backgroundColor: '#3f4045',
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 50,
    justifyContent: 'center',
  },
  Num: {
    color: '#02111b',
  },
});
