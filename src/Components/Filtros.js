import React, { Component } from 'react'
import styled from 'styled-components'

const CaixaServico = styled.div`
border: 1px solid black;
`

export default class Filtros extends Component {
  state = {
    ordernar: '',
    precoMax: '',
    precoMin: '',
    search: '',

  }

  handleSelect = (e) => {
    this.setState({ ordernar: e.target.value })
  }
  handleInputMax = (e) => {
    this.setState({ precoMax: +(e.target.value) })
  }
  handleInputMin = (e) => {
    this.setState({ precoMin: +(e.target.value) })
  }
  handleSearch = (e) => {
    this.setState({ search: e.target.value })
  }


  render() {
    const displayJobs = this.props.jobs.sort((a, b) => {
      switch (this.state.ordernar) {
        case 'crescente':
          return a.price - b.price

        case 'decrescente':
          return b.price - a.price

        case 'alfabetica':
          return a.title.localeCompare(b.title)

        case 'data-recente':
          return new Date(a.dueDate) - new Date(b.dueDate)

        case 'data-distante':
          return new Date(b.dueDate) - new Date(a.dueDate)

        default:
          console.log('caiu default')
          return 0

      }
    })

      .filter((servico) => servico.price <= this.state.precoMax || this.state.precoMax === '')
      .filter((servico) => servico.price <= this.state.precoMin || this.state.precoMin === '')


      .filter((servico) => {
        const jobTitle = servico.title.toLowerCase()
        const jobDescription = servico.description.toLowerCase()
        const searchText = this.state.search.toLocaleLowerCase()
        return jobTitle.includes(searchText) || jobDescription.includes(searchText)
      })




      .map((servico) => {
        return <CaixaServico>
          <h4>
            {servico.title}
          </h4>
          <p>
            {servico.description}
          </p>
          <p>
            {servico.price.toFixed(2)}
          </p>
          <p>
            {(servico.dueDate.split('T')[0]).split('-').reverse().join('/')}
          </p>
          <button onClick={() => { this.props.tela(4); this.props.detalhe(servico.id) }}>Detalhe Card</button>
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
        <input
            value={this.state.search}
            onChange={this.handleSearch}
            placeholder="Pesquisar">
          </input>
         
        <input
          placeholder='Preço máximo'
          value={this.state.precoMax}
          onChange={this.handleInputMax}
        />
        <input
          placeholder='Preço minimo'
          value={this.state.precoMin}
          onChange={this.handleInputMin}
        />
        <div>{displayJobs}</div>
      </div>
    )
  }
}
