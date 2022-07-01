import React, { Component } from 'react'
import styled from 'styled-components'

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
  align-items: center;
  font-family: Arial;
  option {
    font-family: Arial;
    background-color: #FFF6F3;
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
       return new Date(a.dueDate) - new Date(b.dueDate) 
     
      case 'data-distante':
      return new Date(b.dueDate) - new Date(a.dueDate)
     
      default:
        console.log('caiu default')
        return 0
       
    }})
    .map((servico) => {
      return <CaixaServico>
        <h3>
          {servico.title}
        </h3>
        <p>
          {servico.description}
        </p>
        <p>
          {servico.price.toFixed(2)}
        </p>
        <p>
          {(servico.dueDate.split('T')[0]).split('-').reverse().join('/')}
        </p>
        <button onClick={() => {this.props.tela(4); this.props.detalhe(servico.id)}}>Detalhe Card</button>
        <button onClick={() => this.props.adiciona(servico.id)}>Adicionar ao Carrinho</button>
      </CaixaServico>
    })
    return (
      <div>
        <CaixaStyle>
        <label><h4>Ordernar por: </h4></label>
        <select value={this.state.ordernar} onChange={this.handleSelect}>
          <option value={'crescente'}>Preço crescente</option>
          <option value={'decrescente'}>Preço decrescente</option>
          <option value={'data-recente'}>Prazo mais recente</option>
          <option value={'data-distante'}>Prazo mais distante</option>
          <option value={'alfabetica'}>Ordem Alfabética</option>
        </select>
        </CaixaStyle>
        <DisplayWrap>{displayJobs}</DisplayWrap>
      </div>
    )
  }
}
