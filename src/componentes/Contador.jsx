import React, { Component } from 'react'

export default class Contador extends Component {
   

    maisUm = () => {
        //this.props.numero++
        console.log(this)
    }
    render(){
        return (
            <div>
                <div>Número: {this.props.numero}</div>
                <button onClick={this.maisUm}>Incrementar</button>                
                <button>Decrementar</button>
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