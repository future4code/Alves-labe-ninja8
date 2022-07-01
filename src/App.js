import React from "react";
import TelaCarrinho from "./Screens/TelaCarrinho";
import TelaDetalhe from "./Screens/TelaDetalhe";
import TelaFormulario from "./Screens/TelaFormulario";
import TelaServicos from "./Screens/TelaServicos";
import { createGlobalStyle } from 'styled-components';
import { HeaderStyle } from "./Components/Header";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  `

export default class App extends React.Component {
  state = {
    tela : 0,
    carrinho: [],
    itemDetalhe: [],
    idDetalhe : ''
}
componentDidUpdate(){
  console.log(this.state.carrinho)
}
  changeScreen = (tela) =>{
    this.setState({tela : tela})

  }
  detalheCard=(item)=>{
    this.setState({ itemDetalhe: item })
  }
  
  atualizaCarrinho = (array) => {
   let arrayUnico = this.state.carrinho.concat(array)
    arrayUnico = arrayUnico.filter((item,index) => arrayUnico.indexOf(item) == index)
    this.setState({carrinho: arrayUnico})
    
  }
  removeCarrinho = (id)=>{
    const remover = this.state.carrinho.filter(itemCar => {
    return id !== itemCar.id
    })
    this.setState({carrinho: remover})
  }
 screen=() => {
  switch (this.state.tela) {
    case 1:
    return <TelaServicos tela={this.changeScreen} adiciona={this.atualizaCarrinho} detalhe={this.detalheCard}/>
    case 2:
    return <TelaCarrinho tela={this.changeScreen} items={this.state.carrinho} remove={this.removeCarrinho}/>
    case 3:
    return <TelaFormulario tela={this.changeScreen} />
    case 4:
    return <TelaDetalhe tela={this.changeScreen} item={this.state.itemDetalhe}/>
    default:
    return <div>
      <h2>FAÇA SUA ESCOLHA</h2>
      <button onClick={()=>this.changeScreen(3,0)}>Quero ser um Ninja!</button>
      <button onClick={()=>this.changeScreen(1,0)}>Quero contratar um Ninja!</button>
    </div>
 }
}


 
  render() {

    return (
      <div>
        <HeaderStyle>
        </HeaderStyle>
        <GlobalStyle/>
        {this.screen()}
        
      </div>
    );
  }
}

