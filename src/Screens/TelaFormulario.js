import React, { Component } from 'react'
import styled from 'styled-components'
import { createJob } from '../Components/FuncoesApi'


const MainContainer = styled.div`
height:100vh;
`

const InputCadastro = styled.input`
`
const ConteinerInfo = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-top:10px;
`
const SelectOption = styled.select`
width: 50px;
`
const ConteinerPagamento = styled.div`
`
const BotaoPagamento = styled.button`
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
    this.setState({selectPagamento : [...this.state.selectPagamento, event.target.value]})
  }
  render() {
    // console.log(this.addUser)
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
          <label for="pagamentos">Escolha a forma de pagamento:</label>
          <ConteinerPagamento>
            <div>{this.state.selectPagamento}</div>
            <SelectOption value={this.state.selectPagamento} onChange={this.onChangePagamento}>
              <option value="credito">Cartão de Crédito</option>
              <option value="debito">Cartão de Débito</option>
              <option value="paypal">Paypal</option>
              <option value="boleto">Boleto</option>
              <option value="pix">Pix</option>
            </SelectOption>
          </ConteinerPagamento>
          <InputCadastro
            id="date"
            type="date"
            onChange={this.onChangeData}
            value={this.state.inputData}
          />
            <BotaoPagamento onClick={this.addUser}>Cadastrar Serviço</BotaoPagamento>
        </ConteinerInfo>
        <button onClick={()=> this.props.tela(0)}>Voltar</button>
      </MainContainer>
    )
  }
}
