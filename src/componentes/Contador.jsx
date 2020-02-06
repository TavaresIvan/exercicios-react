import React, { Component } from 'react'

export default class Contador extends Component {
   state = {
       numero: 0
   }

    maisUm = (e) => {
        console.log()
        this.alterarNumero(+1)              
    }

    menosUm = () => {
        this.alterarNumero(-1)              
    }

    alterarNumero = diferenca => {
        this.setState({
             numero: this.state.numero + diferenca
            })                
    }

    render(){
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Incrementar</button>                
                <button onClick={this.menosUm}>Decrementar</button>
                <button onClick={() => this.alterarNumero(+10)}>+10</button>
                <button onClick={() => this.alterarNumero(-10)}>-10</button>
            </div>
        )
    }
}

 //Solucao 1
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

//Solucao 2
{/* <button onClick={() => this.maisUm()}>Incrementar</button>*/}

//Solucao 3 - Função arrow
// maisUm = () => {
//     //this.props.numero++
//     console.log(this)

// }