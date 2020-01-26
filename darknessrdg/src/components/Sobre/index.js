import React from 'react'

import Section from '../Section'
import Esquerda from './Esquerda'
import Direita from './Direita'


const Conteudo = () => {
    return (
        <div className="row mb-0">
            <div className="col m12 l6">
                <Esquerda />
            </div>

            <div className="col m12 l6">
                <Direita />
            </div>
        </div>
    )
}

export default () => {
    return (
        <Section
            id="sobre"
            title="Sobre mim"
            body={<Conteudo />}
        />
    )
}