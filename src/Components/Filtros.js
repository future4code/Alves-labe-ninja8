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
        break;
      case 'decrescente':
         return b.price - a.price 
        break;
      case 'alfabetica':
        return a.title.localeCompare(b.title) 
        break;
      case 'data-recente':
       return new Date(b.dueDate) - new Date(a.dueDate) 
        break;
      case 'data-distante':
      return new Date(a.dueDate) - new Date(b.dueDate)
        break;
      default:
        console.log('caiu default')
        return 0
        break;
    }})
    .map((servico) => {
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
        <p>
          {servico.dueDate}
        </p>
        <button onClick={() => this.props.tela(4)}>Detalhe Card</button>
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
