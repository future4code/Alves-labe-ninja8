import React, { Component } from 'react'
import axios from 'axios'
import Filtros from '../Components/Filtros'



export default class TelaServicos extends Component {
  state = {
    usuarios: [],

  }

  componentDidMount() {
    this.mostrarServico()
  }
  adicionaAoCarrinho = (id) => {
    const carrinhoFuncao = this.state.usuarios.filter((servico) => {
      if (servico.id === id){
        return true
      }else{ return false }
    })
    this.props.adiciona(carrinhoFuncao)
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
        <div>
        <Filtros jobs={this.state.usuarios} adiciona={this.adicionaAoCarrinho}/>
        </div>
        <button onClick={() => this.props.tela(2)}>Carrinho</button>
        <button onClick={() => this.props.tela(0)}>Voltar</button>
      </div>
    )
  }
}
