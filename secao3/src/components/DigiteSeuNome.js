import React, {useState} from 'react';
import {TextInput, Text} from 'react-native';

export default () => {
  const [nome, setNome] = useState('Teste');
  return (
    <>
      <Text>{nome}</Text>
      <TextInput
        placeholder="Digite Seu Nome"
        value={null}
        onChangeText={e => setNome(e)}
      />
    </>
  );
};
