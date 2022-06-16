/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import TelaA from './views/TelaA';
import TelaB from './views/TelaB';
import TelaC from './views/TelaC';
import 'react-native-gesture-handler';

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TelaA />
      <TelaB />
      <TelaC />
    </SafeAreaView>
  );
};
