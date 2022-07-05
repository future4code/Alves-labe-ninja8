import React, { Component } from 'react'
import styled from 'styled-components'
import bag from '../img/bag.png'
import bag2 from '../img/bag2.png'

// Aqui fica o corpo dos cards ;-;
const DisplayWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  justify-content: center;
`

// Aqui fica a caixinha de filtro c:
const CaixaStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 1vh;
  gap: 2vw;
  align-items: center;
  font-family: Arial;
  option {
    font-family: Arial;
    background-color: #FFF6F3;
  }
  img {
    width: 3.5vw;
    justify-self: flex-end;
  }
  button {
    background-color: inherit;
    border: none;
    height: 5vh;
  }

`


// Aqui fica a estilização dos cards <3
const CaixaServico = styled.div`
  text-align: center;
  width: 20%;
  border: 1px solid #FFF6F3;
  border-radius: 15px;
  margin: 10px 0px;
  background-color: #FFF6F3;
  box-shadow: 5px 5px 10px #BCB4B3;
  button { /* Aqui fica a customização dos botões */
    background-color: #6C161F;
    color: #E2D8D6;
    width: 200px;
    height: 20px;
    border-radius: 50px;
    border-color: #952030;
    margin: 5px;
      :hover {
        cursor: pointer;
        background-color: #FFF6F3;
        color: #952030;
      }
    }
    h3 {
      text-transform: uppercase;
      font-family: Arial;
    }
    p {
      font-family: Arial;
    }
`

export default class Filtros extends Component {
  state = {
    ordernar: '',
    precoMax: '',
    precoMin: '',
    search: '',
    carrinho: false,

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
  handleIcon = () => {
    this.setState({carrinho: true})
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
       return new Date(a.dueDate) - new Date(b.dueDate) 
     
      case 'data-distante':
      return new Date(b.dueDate) - new Date(a.dueDate)
     
      default:
        console.log('caiu default')
        return 0
       
    }})
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
          <h3>
            {servico.title}
          </h3>
          <p>
            R$ {servico.price.toFixed(2)}
          </p>
          <p>
            {(servico.dueDate.split('T')[0]).split('-').reverse().join('/')}
          </p>
          <button onClick={() => { this.props.tela(4); this.props.detalhe(servico.id) }}>Detalhe Card</button>
          <button onClick={() => {this.props.adiciona(servico.id); this.handleIcon()}}>Adicionar ao Carrinho</button>
        </CaixaServico>
      })

      let iconeCarrinho 
      this.state.carrinho? iconeCarrinho = <img src={bag2} alt='carrinho'></img>: iconeCarrinho = <img src={bag} alt='carrinho'></img>

    return (
      <div>

        <CaixaStyle>
          
        <div>
        <label>Filtrar: </label>
        <select value={this.state.ordernar} onChange={this.handleSelect}>
          <option value={'crescente'}>Preço crescente</option>
          <option value={'decrescente'}>Preço decrescente</option>
          <option value={'data-recente'}>Prazo mais recente</option>
          <option value={'data-distante'}>Prazo mais distante</option>
          <option value={'alfabetica'}>Ordem Alfabética</option>
        </select>
        </div>

        

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
        <button onClick={() => this.props.tela(2)}>{iconeCarrinho}</button>
        </CaixaStyle>
  <DisplayWrap>{displayJobs}</DisplayWrap>
      </div>
    )
  }
}
