import React, { Component } from 'react'
import { HeaderStyle } from '../Components/Header'
import oito from '../img/8.png'
import styled from 'styled-components'

// Aqui fica a estilização do Card :o
const CaixaServico2 = styled.div`
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

const CardCentro = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15vh;
`

export default class TelaDetalhe extends Component {
 
    componentDidMount(){
     console.log(this.props.item)
    }
  render() {
    return (
      <div>
        <HeaderStyle>
        <img src={oito}></img><h1>O oitavo ninja</h1><img src={oito}></img>
        </HeaderStyle>
      <CardCentro>
      <CaixaServico2>
        {this.props.item.map((item)=>{
          return <div>
          <h3>{item.title}</h3>
          <p>Este ninja cobra: R$ {item.price.toFixed(2)}</p>
          <p>Descrição: {item.description}</p>
          <p>Serviço será feito até: {(item.dueDate.split('T')[0]).split('-').reverse().join('/')}</p>
          </div>
        }
        )}
        <button onClick={()=>this.props.tela(1)}>Voltar</button>
      </CaixaServico2>
      </CardCentro>
      </div>
    )
  }
}
