import React from 'react'
import ReactDom from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
import {CompA, CompB} from './componentes/DoisComponentes'

const elemento = document.getElementById('root')
//const jsx = <h1>Olá React!</h1>
//ReactDom.render(jsx, elemento)
ReactDom.render(
        <div>
            {/* <PrimeiroComponente valor="Bom dia!" aBcD="123" /> */}
            <CompA valor="Olá, eu sou o componente A" />
            <CompB valor="B na área" />            
        </div>
    , elemento)