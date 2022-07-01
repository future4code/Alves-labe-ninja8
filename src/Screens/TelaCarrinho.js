import React, { Component } from 'react'

export default class TelaCarrinho extends Component {
  state = {
    precoTotal: 0,
  }
  componentDidMount(){
    console.log(this.props.items)
  }
  componentDidUpdate() {
    this.precoTotal()
  }

  
  
  render() {
    let soma = 0.0001
    const preco = this.props.items.map((obj) => { return obj.price })
    for (let index = 0; index < preco.length; index++) {
      soma += preco[index];
    }
 
    return (
      <div>{this.props.items.map((item) => {
        return (<div><h4> {item.title} </h4>
          <p> R$ {item.price.toFixed(2)} </p>
        </div>)
      })}
      <h4>Preco total: R${soma.toFixed(2)}</h4>
      <button onClick={()=> this.props.tela(1)}>Voltar</button>
      <button onClick ={this.props.remove}>Remover</button>
      </div>
    )
  }
}
