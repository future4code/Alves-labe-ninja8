import React, { Component } from 'react'
import styled from 'styled-components'

const CaixaServico = styled.div`
border: 1px solid black;
`

export default class Filtros extends Component {
  state = {
    ordernar: '',
  }
  
  handleSelect = (e) => {
    this.setState({ ordernar: e.target.value})
  }


  render() {
    const displayJobs = this.props.jobs.sort( (a,b) => {
    switch (this.state.ordernar) {
      case 'crescente':
        return  a.price - b.price
       
      case 'decrescente':
         return b.price - a.price 
        
      case 'alfabetica':
        return a.title.localeCompare(b.title) 
    
      case 'data-recente':
       return new Date(b.dueDate) - new Date(a.dueDate) 
     
      case 'data-distante':
      return new Date(a.dueDate) - new Date(b.dueDate)
     
      default:
        console.log('caiu default')
        return 0
       
    }})
    .map((servico) => {
      return <CaixaServico>
        <h4>
          {servico.title}
        </h4>
        <p>
          {servico.description}
        </p>
        <p>
          {servico.price}
        </p>
        <p>
          {servico.dueDate}
        </p>
        <button onClick={() => this.props.tela(4)}>Detalhe Card</button>
        <button onClick={() => this.props.adiciona(servico.id)}>Adicionar ao Carrinho</button>
      </CaixaServico>
    })
    return (
      <div>
        <label>Ordernar por :</label>
        <select value={this.state.ordernar} onChange={this.handleSelect}>
          <option value={'crescente'}>Preço crescente</option>
          <option value={'decrescente'}>Preço decrescente</option>
          <option value={'data-recente'}>Prazo mais recente</option>
          <option value={'data-distante'}>Prazo mais distante</option>
          <option value={'alfabetica'}>Ordem Alfabética</option>
        </select>
        <div>{displayJobs}</div>
      </div>
    )
  }
}
