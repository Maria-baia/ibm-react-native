import React from 'react';
import {View} from 'react-native';

export default ({color = '#b9d6f2', lado = 20}) => {
  return <View style={{height: lado, width: lado, backgroundColor: color}} />;
};
