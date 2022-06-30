import React, { Component } from 'react'

export default class Filtros extends Component {
  state={
    servicos : this.props.jobs,
    servicosFiltrados: [],
    ordernar : '',
  }
  componentDidMount(){
  
    console.log(this.state.servicos)
  }
  componentDidUpdate(){
    this.atualizFiltro()
  }
  atualizFiltro() {
    if (this.state.servicos!== this.props.jobs){
        this.setState({ servicos: this.props.jobs})
    }
    
}
  listaFiltrada = ()=> {
    const listaMapeada = this.state.servicos.map((servico) => {
      return <div key={servico.id}>
      <h2>{servico.title}</h2>
      <p>Preço : {servico.price}</p>
      <p>Métodos de pagamento : {servico.paymentMethods}</p>
      <p>Prazo : {servico.dueDate}</p>
      </div>
    })
    switch (this.state.ordernar) {
      case 'crescente':
        return listaMapeada.sort((a,b)=>{return a.price-b.price})
      case 'decrescente':
        return listaMapeada.sort((a,b)=>{return b.price-a.price})
      case 'alfabetica' : 
        return listaMapeada.sort((a,b)=>{return a.title.localecompare(b.title)})
      case 'data-recente' :
        return listaMapeada.sort((a,b)=>{return new Date(b.dueDate)- new Date(a.dueDate)})
      case 'data-distante' : 
       return listaMapeada.sort((a,b)=>{return new Date(a.dueDate)- new Date(b.dueDate)})
      default :
        return listaMapeada
    }
  }
   handleSelect = (e) => {
    this.setState({ordernar : e.target.value})
   } 
   
    
  render() {

    return (
      <div>
        <div>{this.listaFiltrada()}</div>
        <label>Ordernar por :</label>
        <select value={this.state.ordernar} onChange={this.handleSelect}>
          <option value={'crescente'}>Preço crescente</option>
          <option value={'decrescente'}>Preço decrescente</option>
          <option value={'data-recente'}>Prazo mais recente</option>
          <option value={'data-distante'}>Prazo mais distante</option>
          <option value={'alfabetica'}>Ordem Alfabética</option>
        </select>
      </div>
    )
  }
}
