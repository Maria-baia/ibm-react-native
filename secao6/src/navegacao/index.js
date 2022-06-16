/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import Stack from './Stack';
import Tab from './Tab';
// import Drawer from './Drawer.js';

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {/* <Stack /> */}
        <Tab />
        {/* <Drawer /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
};
