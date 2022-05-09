import React from 'react';
import {Text, Platform} from 'react-native';
import Style from './style';

export default () => {
  return (
    <>
      <Text style={Style.txtG}>
        {Platform.OS === 'android'
          ? 'Android'
          : Platform.OS === 'ios'
          ? 'iOS'
          : Platform.OS}
      </Text>
    </>
  );
};
