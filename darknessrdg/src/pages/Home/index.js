import React, { useEffect } from 'react'
import M from 'materialize-css'

import Sobre from '../../components/Sobre'
import Banner from '../../components/Banner'
import Skills from '../../components/Skills'
import Portifolio from '../../components/Portifolio'
import Contato from '../../components/Contato'
import Footer from '../../components/Footer'
import Experiencias from '../../components/Experiencias'


export default () => {
    useEffect(() => {
        M.AutoInit()
    }, [])

    return (
        <>
            <Banner />
            <Sobre />
            <Skills />
            <Portifolio /> 
            <Experiencias />
            <Contato />
            <Footer />
        </>
    )
}