import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Style from '../style';

export default ({num}) => {
  return (
    <View style={style.Display}>
      <Text style={[Style.txtG, style.DisplayText]}>{num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Display: {
    backgroundColor: '#272727',
    padding: 20,
    width: 300,
  },
  DisplayText: {
    color: '#fed766',
  },
});
