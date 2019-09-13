import React from 'react'
import ReactDom from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import {CompA, CompB} from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'
//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'
//import ComponenteComFuncao from './componentes/ComponenteComFuncao'
//import Pai from './componentes/Pai'
//import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'

const elemento = document.getElementById('root')
//const jsx = <h1>Olá React!</h1>
//ReactDom.render(jsx, elemento)
ReactDom.render(
        <div>
            <Contador numero={0} />
            {/* <ComponenteClasse valor="Sou um componente de classe!" /> */}
            {/* <Pai /> */}
            {/* <ComponenteComFuncao /> */}
            {/* <Familia sobrenome="Pereirao">
                <Membro nome="Andre" />
                <Membro nome="Mariana" />
            </Familia>            */}
            {/* <FamiliaSilva /> */}
            {/* <MultiElementos></MultiElementos> */}
            {/* <PrimeiroComponente valor="Bom dia!" aBcD="123" /> 
            <CompA valor="Olá, eu sou o componente A" />
            <CompB valor="B na área" />*/}            
        </div>
    , elemento)