import React, { Component } from 'react';
import { HeaderStyle } from '../Components/Header';
import oito from '../img/8.png';
import styled from 'styled-components';

const CaixaServico3 = styled.div`
  text-align: center;
  width: 20%;
  border: 1px solid #FFF6F3;
  border-radius: 15px;
  margin: 10px 0px;
  background-color: #FFF6F3;
  box-shadow: 5px 5px 10px #BCB4B3;
  font-family: Arial;
  button { /* Aqui fica a customização dos botões */
    background-color: #6C161F;
    color: #E2D8D6;
    width: 200px;
    height: 20px;
    border-radius: 50px;
    border-color: #952030;
    margin: 5px;
      :hover {
        cursor: pointer;
        background-color: #FFF6F3;
        color: #952030;
      }
    }
    h3 {
      text-transform: uppercase;
      font-family: Arial;
    }
    p {
      font-family: Arial;
    }
`

const CardCentro2 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8vh;
`

export default class TelaCarrinho extends Component {
  state = {
    precoTotal: 0,
  }
  componentDidMount(){
    console.log(this.props.items)
  }
  componentDidUpdate() {
    
  }

  
  
  render() {
    let soma = 0.0001
    const preco = this.props.items.map((obj) => { return obj.price })
    for (let index = 0; index < preco.length; index++) {
      soma += preco[index];
    }
 
    return (
      <div>
        <HeaderStyle>
        <img src={oito}></img><h1>O oitavo ninja</h1><img src={oito}></img>
        </HeaderStyle>
        <CardCentro2><CaixaServico3>
        {this.props.items.map((item) => {
        return (<div><h4> {item.title} </h4>
          <p> R$ {item.price.toFixed(2)} </p>
          <button onClick ={() =>this.props.remove(item.id)}>Remover</button>
        </div>)
      })}
      <h4>Preco total: R$ {soma.toFixed(2)}</h4>
      <button onClick={()=> this.props.tela(1)}>Voltar</button>
      </CaixaServico3>
      </CardCentro2>
      </div>
    )
  }
}
