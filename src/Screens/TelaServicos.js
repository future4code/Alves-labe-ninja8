import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CaixaServico = styled.div`
border: 1px solid black;
`

export default class TelaServicos extends Component {
  state = {
    usuarios: [],
  }

  componentDidMount() {
    this.mostrarServico()
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
    const renderizarServicos = this.state.usuarios.map((servico) => {
      return <CaixaServico>
        <p>
          {servico.title}
        </p>
        <p>
          {servico.description}
        </p>
        <p>
          {servico.price}
        </p>
        <button onClick={()=>this.props.tela(4)}>Detalhe Card</button>
      </CaixaServico>
    })

    return (
      <div>
        <div>
        <Filtros jobs={this.state.servicos}/>
        </div>
        <button onClick={() => this.props.tela(2)}>Carrinho</button>
        <button onClick={() => this.props.tela(0)}>Voltar</button>
        {renderizarServicos}
      </div>
    )
  }
}
