import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

export default ({inc, dec}) => {
  return (
    <View style={styles.Botoes}>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </View>
  );
};

const styles = StyleSheet.create({
  Botoes: {
    flexDirection: 'row',
  },
});
