import React, { Component } from 'react'
import axios from 'axios'
import Filtros from '../Components/Filtros'
import { HeaderStyle } from '../Components/Header'
import oito from '../img/8.png'
import styled from 'styled-components'


// Aqui fica os botões de Carrinho e Voltar dos cards :)
const ServicosStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial;
  button { /* Aqui fica a estilização dos botões */
    background-color: #6C161F;
    color: #E2D8D6;
    width: 300px;
    height: 50px;
    border-radius: 50px;
    border-color: #952030;
    margin: 5px;
      :hover {
        cursor: pointer;
        background-color: #E2D8D6;
        color: #952030;
      }
    }   
`

export default class TelaServicos extends Component {
  state = {
    usuarios: [],

  }

  componentDidMount() {
    this.mostrarServico()
  }
  adicionaAoCarrinho = (id) => {
    const carrinhoFuncao = this.state.usuarios.filter((servico) => {return servico.id === id})
    this.props.adiciona(carrinhoFuncao)
  }
  retornaItemDetalhe = (id) => {
    const itemDetalhe = this.state.usuarios.filter((servico) => {return servico.id === id})
    this.props.detalhe(itemDetalhe)
  }

  mostrarServico = () => {
    axios.get("https://labeninjas.herokuapp.com/jobs", {
      headers: {
        Authorization: "93a18548-d983-40d1-bcfe-f4862b3a6da1"
      }
    }).then((resposta) => {
      this.setState({ usuarios: resposta.data.jobs })
      console.log(resposta.data.jobs)
    }).catch((erro) => {
      alert(erro.response.data)
    })
  };

  render() {
    
    return (
      <div>
        <HeaderStyle>
        <img src={oito}></img><h1>O oitavo ninja</h1><img src={oito}></img>
        </HeaderStyle>
        <div>
        <Filtros jobs={this.state.usuarios} adiciona={this.adicionaAoCarrinho} 
        tela={this.props.tela} detalhe={this.retornaItemDetalhe}/>
        </div>
        <ServicosStyle>
        <button onClick={() => this.props.tela(2)}><h3>Carrinho</h3></button>
        <button onClick={() => this.props.tela(0)}><h3>Voltar</h3></button>
        </ServicosStyle>
      </div>
    )
  }
}
