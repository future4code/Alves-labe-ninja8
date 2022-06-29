import React, { Component } from 'react'

export default class TelaCarrinho extends Component {
    state = {
        produtoCarrinho: [],
        precoTotal: 0, 
    }

    componentDidUpdate() {
        console.log(this.state.produtosCarrinho)
        this.atualizaHome()
        this.precoFinal()
    }
    atualizaHome() {
        if (this.state.produtos !== this.props.produtosHome) {
            this.setState({ produtos: this.props.produtosHome })
        }
    }

    addCarrinho(id) {
        const novoCarrinho = this.state.produtoCarrinho

            //  .concat(this.state.produto.filter(obj)=> {
            //     if(obj.id === id) return true
            // })else{return false
            // }
            .map((obj) => {
                return { ...obj, id: Date.now() }
            })
        this.setState({ produtoCarrinho: novoCarrinho })

    }

    precoTotal() {
        let soma = 0.0001
        let preco = this.state.produtoCarrinho.map((obj) => { return item.price })
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

            </div>
        )
    }
}
