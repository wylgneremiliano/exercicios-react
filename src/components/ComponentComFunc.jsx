import React from 'react'

const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

export default props => {
    const gerarItem = itens => {
        return itens.map(item => <li>{item}</li>)
    }
    return (
        <ul>
            {gerarItem(aprovados)}
        </ul>
    )
}