import React from 'react';
import {Text} from 'react-native';
import Style from './style';
import If from './If';

export default props => {
  const usuario = props.usuario || {};
  return (
    <If teste={usuario.nome && usuario.email}>
      <Text style={Style.txtG}>Usuário Logado:</Text>
      <Text style={Style.txtG}>
        {usuario.nome} - {usuario.email}
      </Text>
    </If>
  );
};
