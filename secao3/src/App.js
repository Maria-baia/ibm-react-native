import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/relacao/Pai';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/ParImpar';
// import Filho from './components/relacao/Filho';
// import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import Quadrado from './components/layout/Quadrado';
import Mega from './components/mega/Mega';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <Mega qtdeNumeros={12} />
      {/* <Quadrado />
      <Quadrado color="#061a40" lado={30} />
      <Quadrado color="#0353a4" lado={40} />
      <Quadrado color="#006daa" lado={50} />
      <Quadrado color="#003559" lado={60} /> */}
      {/* <DigiteSeuNome /> */}
      {/* <ListaProdutos /> */}
      {/* <UsuarioLogado usuario={{nome: 'Maria', email: 'maria@gmail.com'}} />
      <UsuarioLogado usuario={{nome: 'Fernanda'}} />
      <UsuarioLogado usuario={{email: 'fernanda@gmail.com'}} />
      <UsuarioLogado usuario={null} />
      <UsuarioLogado usuario={{}} /> */}
      {/* <Pai>
        <Filho nome="Carla" sobrenome="Borges" />
        <Filho nome="Wander" sobrenome="Borges" />
      </Pai>
      <Pai>
        <Filho nome="Fernanda" sobrenome="Baia" />
        <Filho nome="Manu" sobrenome="Baia" />
        <Filho nome="Maria" sobrenome="Baia" />
        <Filho nome="Ana" sobrenome="Baia" />
      </Pai> */}
      {/* <ParImpar num={3} /> */}
      {/* <Diferenciar /> */}
      {/* <ContadorV2 /> */}
      {/* <Contador inicial={100} passo={13} />
      <Contador /> */}
      {/* <Botao /> */}
      {/* <Titulo
        principal="Cadastro Produto"
        secondary="Tela de Cadastro do Produto"
      /> */}
      {/* <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} /> */}
      {/* <MinMax num1={Aleatorio()} num2={Aleatorio()} />
      <MinMax num1={Aleatorio()} num2={Aleatorio()} /> */}
      {/* <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
