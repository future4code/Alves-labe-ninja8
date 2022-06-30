import React, { Component } from 'react'

export default class TelaCarrinho extends Component {
  state = {
    produtoCarrinho: [],
    precoTotal: 0,
  }

  componentDidUpdate() {
    console.log(this.state.produtoCarrinho)
    this.precoFinal()
  }


  addCarrinho(id) {
    const novoCarrinho = this.state.produtoCarrinho
      .concat(this.state.produto.filter((obj) => {
        if (obj.id === id) {
          return true
        } else {
          return false
        }
      }))
    this.setState({ produtoCarrinho: novoCarrinho })

  }

  precoTotal() {
    let soma = 0.0001
    let preco = this.state.produtoCarrinho.map((obj) => { return obj.price })
    for (let index = 0; index < preco.length; index++) {
      soma += preco[index];
    }
    if (this.state.precoTotal !== soma) { this.setState({ precoTotal: soma }) }
  }

  render() {

    return (
      <div>{this.state.produtoCarrinho.map((item) => {
        return (<div><h4> {item.title} </h4>
          <p> R$ {item.price.toFixed(2)} </p>
          <botaCarrinho onClick={() => this.addCarrinho(item.id)}>Adicionar ao carrinho</botaCarrinho>
        </div>)
      })}
      <button onClick={()=> this.props.tela(1)}>Voltar</button>
      </div>
    )
  }
}
