import React from 'react'

import Section from '../Section'


export default () => {
    return (
        <Section 
            id="sobre" 
            title="Sobre mim" 
            left={<h1>esquerda</h1>} 
            right={<h1>direita</h1>} 
            />
    )
}