import React, { useState } from 'react'
import Filho from './Filho'

export default props => {
    const [lugarInformado, setLugarInformado] = useState("Nenhum")
    const notificarSaida =
        lugar => {
            setLugarInformado(lugar)
        }
    return (
        <div>
            {lugarInformado}
            <Filho notificarSaida={notificarSaida} />
        </div>
    )
}