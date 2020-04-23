import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './components/PrimeiroComponente'
// import { CompA, CompB } from './components/DoisComponentes'
// import MultiElementos from './components/MultiElementos'
// import FamiliaSilva from './components/FamiliaSilva'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponentComFun from './components/ComponentComFunc'
import Pai from './components/Pai'
import ExClasse from './components/ExClasse'
const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        {/* <MultiElementos /> */}
        {/*<PrimeiroComponente valor="Bom dia!" />*/}
        {/* <CompA valor="Olá eu sou A"/>
        <CompB valor="Olá eu sou B"/> */}
        {/* <FamiliaSilva /> */}
        {/* <Familia sobrenome="Emiliano">
            <Membro nome="Wylgner" />
            <Membro nome="Maria" />
            <Membro nome="Gilmar" />
            <Membro nome="Lucas" />
            {/* <Membro nome="Lucas" sobrenome="Emiliano" />
            <Membro nome="Pedro" sobrenome="Emiliano" /> */}
        {/* </Familia> */}
        {/* <ComponentComFun /> */}
        <Pai />
        {/* <ExClasse /> */}
    </div>, elemento)