import React, { Component } from 'react'

export default class TelaDetalhe extends Component {
  render() {
    return (
      <div> 
        <h1>TelaDetalhe</h1>
        <button onClick={()=> this.props.tela(1)}>Voltar</button>
      </div>
    )
  }
}
