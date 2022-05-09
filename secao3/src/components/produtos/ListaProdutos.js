import React from 'react';
import {Text, FlatList} from 'react-native';
import Style from '../style';
import produtos from './produtos';

export default () => {
  return (
    <>
      <Text style={Style.txtG}>Lista de Produtos</Text>
      {/* {produtos.map(produto => (
        <Text key={produto.id}>
          {produto.id} - {produto.nome} custa R$ {produto.preco}
        </Text>
      ))} */}
      <FlatList
        data={produtos}
        renderItem={({item}) => (
          <Text key={item.id}>
            {item.id}) {item.nome} - {item.preco}
          </Text>
        )}
      />
    </>
  );
};
