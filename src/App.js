import React from "react";
import TelaCarrinho from "./Screens/TelaCarrinho";
import TelaDetalhe from "./Screens/TelaDetalhe";
import TelaFormulario from "./Screens/TelaFormulario";
import TelaServicos from "./Screens/TelaServicos";
import { createGlobalStyle } from 'styled-components';
import { getAllJobs } from "./Components/FuncoesApi";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  `

export default class App extends React.Component {
  state = {
    tela : 0,
    servicos : []
}
componentDidMount () {
const servicos = getAllJobs()
console.log(servicos)
// this.setState({servicos : servicos})
}

  changeScreen = (tela) =>{
    this.setState({tela : tela})
   }
  
 screen=() => {
  switch (this.state.tela) {
    case 1:
    return <TelaServicos tela={this.changeScreen}/>
    case 2:
    return <TelaCarrinho tela={this.changeScreen}/>
    case 3:
    return <TelaFormulario tela={this.changeScreen}/>
    case 4:
    return <TelaDetalhe tela={this.changeScreen}/>
    default:
    return <div>
      <h2>FAÇA SUA ESCOLHA</h2>
      <button onClick={()=>this.changeScreen(3)}>Quero ser um Ninja!</button>
      <button onClick={()=>this.changeScreen(1)}>Quero contratar um Ninja!</button>
    </div>
 }
}


 
  render() {

    return (
      <div>
        <GlobalStyle/>
        {this.screen()}
      </div>
    );
  }
}

