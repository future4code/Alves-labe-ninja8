import React, { Component } from 'react';
import axios from 'axios';
import Filtros from '../Components/Filtros'

export default class TelaServicos extends Component {
  state = {
    servicos: []
  }
 componentDidMount () {
  this.getAllJobs()
  }
  componentDidUpdate(){
    console.log(this.state.servicos)
  }

  getAllJobs = () => {
      axios.get(
            `https://labeninjas.herokuapp.com/jobs`, 
            {
                headers: {
                    Authorization: "93a18548-d983-40d1-bcfe-f4862b3a6da1"
                }
            })
      .then((response)=>{
          this.setState({servicos: response.data.jobs})
          console.log(this.state.servicos)
      })
      .catch((err)=>{
        console.log(err.response)
    })
  }
  
  render() {
    return (
      <div>
        <div>
        <Filtros jobs={this.state.servicos}/>
        </div>
        <button onClick={()=>this.props.tela(2)}>Carrinho</button>
        <button onClick={()=> this.props.tela(4)}>Detalhe Card</button>
        <button onClick={()=> this.props.tela(0)}>Voltar</button>
      </div>
    )
  }
}
