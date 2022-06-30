import React, { Component } from 'react'

export default class TelaServicos extends Component {
  render() {
    return (
      <div>
        <p>Laalalalalallalalalalal</p>
        <button onClick={()=>this.props.tela(2)}>Carrinho</button>
        <button onClick={()=> this.props.tela(4)}>Detalhe Card</button>
        <button onClick={()=> this.props.tela(0)}>Voltar</button>
      </div>
    )
  }
}
