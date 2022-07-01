import React, { Component } from 'react'

export default class TelaDetalhe extends Component {
 
    componentDidMount(){
     console.log(this.props.item)
    }
  render() {
    
    return (
      <div> 
        {this.props.item.map((item)=>{
          return <div>
          <h1>{item.title}</h1>
          <p>Este ninja cobra: {item.price}</p>
          <p>Para :{item.description}</p>
          <p>Serviço será feito até: {(item.dueDate.split('T')[0]).split('-').reverse().join('/')}</p>
          </div>
        }
        )}
        <button onClick={()=>this.props.tela(1)}>Voltar</button>
      </div>
    )
  }
}
