import React, { Component } from 'react'

export default class TelaCarrinho extends Component {
  state = {
    precoTotal: 0,
  }

  componentDidUpdate() {
    this.precoTotal()
  }

  precoTotal() {
    let soma = 0.0001
    let preco = this.props.items.map((obj) => { return obj.price })
    for (let index = 0; index < preco.length; index++) {
      soma += preco[index];
    }
    if (this.state.precoTotal !== soma) { this.setState({ precoTotal: soma }) }
  }

  render() {

    return (
      <div>{this.props.items.map((item) => {
        return (<div><h4> {item.title} </h4>
          <p> R$ {item.price.toFixed(2)} </p>
        </div>)
      })}
      <button onClick={()=> this.props.tela(1)}>Voltar</button>
      </div>
    )
  }
}
