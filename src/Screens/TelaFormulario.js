import React, { Component } from 'react'
import styled from 'styled-components'


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
`
const ConteinerPagamento = styled.div`
`
const BotaoPagamento = styled.button`
`

export default class TelaFormulario extends Component {
  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputPreco: "",
    inputData: ""
  }

  addUser = () => {
    const bodyUser = {
      title: this.state.inputTitulo,
      description: this.state.inputDescricao,
      price: this.state.inputPreco,
      paymentMethods: ["Paypal"],
      dueDate: this.state.inputData,
    }
  }

  onChangeTitulo = (event) => {
    this.setState({ inputTitulo: event.target.value })
  }

  onChangeDescricao = (event) => {
    this.setState({ inputDescricao: event.target.value })
  }

  onChangePreco = (event) => {
    this.setState({ inputPreco: event.target.value })
  }
  onChangeData = (event) => {
    this.setState({ inputData: event.target.value })
  }

  render() {
    console.log(this.addUser)
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
            <SelectOption name="pagamentos" id="pagametnos" multiple>
              <option value="credito">Cartão de Créadito</option>
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
      </MainContainer>
    )
  }
}
