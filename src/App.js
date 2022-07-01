import React from "react";
import styled from "styled-components";
import TelaCarrinho from "./Screens/TelaCarrinho";
import TelaDetalhe from "./Screens/TelaDetalhe";
import TelaFormulario from "./Screens/TelaFormulario";
import TelaServicos from "./Screens/TelaServicos";
import { createGlobalStyle } from 'styled-components';

import { HeaderStyle, EscolhaStyle, ImgStyle } from './Components/Header' 
import ninja2 from './img/ninja-maos.png'
import oito from './img/8.png'



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #e2d8d6;
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
      <HeaderStyle>
        <img src={oito}></img><h1>O oitavo ninja</h1><img src={oito}></img>
      
      </HeaderStyle>
      <ImgStyle>
      <img src={ninja2}></img> 
      </ImgStyle>
      <EscolhaStyle>
      <button onClick={()=>this.changeScreen(3,0)}><h3>Quero ser um Ninja!</h3></button>
      <button onClick={()=>this.changeScreen(1,0)}><h3>Quero contratar um Ninja!</h3></button>
      </EscolhaStyle>
      
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

