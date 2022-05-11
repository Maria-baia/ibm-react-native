/* eslint-disable no-eval */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default () => {
  const [value, setValue] = useState('0');
  const [equation, setEquation] = useState('');

  const addDigit = n => {
    if (
      equation.endsWith('/') ||
      equation.endsWith('*') ||
      equation.endsWith('-') ||
      equation.endsWith('+') ||
      (value === '0' && n !== '.')
    ) {
      setValue(n);
    } else if (n === '.' && value.includes('.') === false) {
      setValue(value + n);
    } else if (n !== '.' && value !== '0') {
      setValue(value + n);
    }
  };

  const clearMemory = () => {
    setValue('0');
    setEquation('');
  };

  const functionSetOperation = operation => {
    if (operation !== '=') {
      setEquation(equation + value + operation);
    } else {
      setValue(eval(equation + value));
    }
  };
  return (
    <View style={styles.container}>
      <Display value={value} />
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={functionSetOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={functionSetOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={functionSetOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={functionSetOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation onClick={functionSetOperation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
