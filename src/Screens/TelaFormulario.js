import React, { Component } from 'react'
import styled from 'styled-components'
import { createJob } from '../Components/FuncoesApi'
import { HeaderStyle } from '../Components/Header'

const MainContainer = styled.div`
height:98vh;
`

const InputCadastro = styled.input`
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
  padding-top:1%;
  margin-top:1%;
`
const InputData = styled.input`
margin-top:0.5%;
`
const ConteinerInfo = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-top:10px;
`
const ConteinerBotoes = styled.div`
`
const LegendaPagamento = styled.label`
padding-bottom:1%;
padding-top:5%;
`
const SelectOption = styled.select`
width: 70%;
overflow: hidden;
`
const ConteinerPagamento = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-bottom:1%;
`
const BotaoPagamento = styled.button`
    background-color: #6C161F;
        color: #E2D8D6;
        border-radius: 50px;
        border-color: #952030;
        margin: 5px;
        :hover {
            cursor: pointer;
            background-color: #952030;
            color: #969090;
        }
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
          <ConteinerPagamento>
          <LegendaPagamento for="pagamentos">Escolha a forma de pagamento:</LegendaPagamento>
            <SelectOption value={this.state.selectPagamento} onChange={this.onChangePagamento}>
              <option value="Credito">Cartão de Crédito</option>
              <option value="Debito">Cartão de Débito</option>
              <option value="Paypal">Paypal</option>
              <option value="Boleto">Boleto</option>
              <option value="Pix">Pix</option>
            </SelectOption>
          </ConteinerPagamento>
            <div>Foram selecionados as opções:<br/>{this.state.selectPagamento}</div>
          <InputData
            id="date"
            type="date"
            onChange={this.onChangeData}
            value={this.state.inputData}
          />
          <BotaoPagamento onClick={this.addUser}>Cadastrar Serviço</BotaoPagamento>
        <ConteinerBotoes>
        <BotaoPagamento onClick={()=> this.props.tela(0)}>Voltar</BotaoPagamento>
        </ConteinerBotoes>
        </ConteinerInfo>
      </MainContainer>
    )
  }
}
