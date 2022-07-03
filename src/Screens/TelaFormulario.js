import React, { Component } from 'react'
import styled from 'styled-components'
import { createJob } from '../Components/FuncoesApi'
import { HeaderStyle } from '../Components/Header'
import oito from '../img/8.png'


const MainContainer = styled.div`
height:98vh;
`
// Aqui fica os espaços entre os inputs xD
const InputCadastro = styled.input`
  margin-top: 0.7vh;
`

// Aqui fica a estilização do Formulário e.e
const ConteinerInfo = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:10px;
  font-family: arial;
  label {
    margin-top: 4vh;
    margin-bottom: 1vh;
    font-weight: bold;
  }
  button { /* Aqui fica a estilização dos botões */
    background-color: #6C161F;
    color: #E2D8D6;
    width: 150px;
    height: 20px;
    border-radius: 50px;
    border-color: #952030;
    margin: 5px;
      :hover {
        cursor: pointer;
        background-color: #E2D8D6;
        color: #952030;
      }
    }   
`

// Aqui é o espaço do botão select de pagamento :3
const SelectOption = styled.select`
width: 150px;

`


export default class TelaFormulario extends Component {
  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputPreco: '',
    inputData: "",
    selectPagamento:[],
  }

  addUser = () => {
    const bodyUser = {
      title: this.state.inputTitulo,
      description: this.state.inputDescricao,
      price: this.state.inputPreco,
      paymentMethods: this.state.selectPagamento,
      dueDate: this.state.inputData
    }
  createJob(bodyUser)
  this.setState({inputTitulo: '', inputData:'', inputDescricao:'', inputPreco:'', selectPagamento: []})
  }

  onChangeTitulo = (event) => {
    this.setState({ inputTitulo: event.target.value })
  }

  onChangeDescricao = (event) => {
    this.setState({ inputDescricao: event.target.value })
  }

  onChangePreco = (event) => {
    this.setState({ inputPreco: +(event.target.value)})
  }
  onChangeData = (event) => {
    this.setState({ inputData: event.target.value })
  }
  onChangePagamento = (event) => {
    this.setState({selectPagamento : [...this.state.selectPagamento,` ${event.target.value}`]})
  }
  render() {
    return (
      <MainContainer>
        <HeaderStyle>
        <img src={oito}></img><h1>O oitavo ninja</h1><img src={oito}></img>
      
      </HeaderStyle>
        <ConteinerInfo>
          <h2>Cadastre seu serviço:</h2>
          <InputCadastro
            placeholder="Titulo"
            value={this.state.inputTitulo}
            onChange={this.onChangeTitulo} />
          <InputCadastro
            placeholder="Descrição"
            value={this.state.inputDescricao}
            onChange={this.onChangeDescricao} />
          <InputCadastro
            placeholder="Preço"
            value={this.state.inputPreco}
            onChange={this.onChangePreco}
          />


          <label for="pagamentos">Forma de pagamento:</label>
            <div>{this.state.selectPagamento}</div>
            <SelectOption value={this.state.selectPagamento} onChange={this.onChangePagamento}>
              <option value="Crédito ">Cartão de Crédito</option>
              <option value="Débito ">Cartão de Débito</option>
              <option value="PayPal ">Paypal</option>
              <option value="Boleto ">Boleto</option>
              <option value="Pix ">Pix</option>
            </SelectOption>
          <InputCadastro

            id="date"
            type="date"
            onChange={this.onChangeData}
            value={this.state.inputData}
          />

            <button onClick={this.addUser}>Cadastrar</button>
        
        <button onClick={()=> this.props.tela(0)}>Voltar</button>
      </ConteinerInfo>

      </MainContainer>
      
    )
  }
}
