import React from 'react';
import {Text} from 'react-native';

export default props => {
  return (
    <>
      <Text>Família</Text>
      {props.children}
      <Text>-</Text>
    </>
  );
};
