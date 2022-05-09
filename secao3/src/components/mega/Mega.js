import React, {Component} from 'react';
import {Text, TextInput, Button, View} from 'react-native';
import Style from '../style';
import Numero from './Numero';

export default class Mega extends Component {
  state = {qtdeNumeros: this.props.qtdeNumeros, numeros: []};

  alterarQtdeNumero = qtde => {
    this.setState({qtdeNumeros: +qtde});
  };

  gerarNumeros = () => {
    let array = [];
    let num = 0;
    this.setState({numeros: []});
    for (let i = 0; array.length < this.state.qtdeNumeros; i++) {
      num = Math.floor(Math.random() * 60) + 1;
      if (array.includes(num) === false) {
        array.push(num);
      }
    }
    this.setState({numeros: array});
  };

  render() {
    return (
      <>
        <Text style={Style.txtG}>Gerador de Mega-Sena</Text>
        <TextInput
          placeholder="Quantidade de Números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={this.alterarQtdeNumero}
          style={{borderBottomWidth: 1}}
          keyboardType={'numeric'}
        />
        <Button title="Exibir números" onPress={this.gerarNumeros} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {this.state.numeros
            .sort((a, b) => a - b)
            .map((num, index) => (
              <Numero key={index} num={num} />
            ))}
        </View>
      </>
    );
  }
}
