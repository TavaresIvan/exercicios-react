import React from 'react'

export default () => {
    const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']
    
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}