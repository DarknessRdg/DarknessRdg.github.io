import React, { useEffect } from 'react'
import M from 'materialize-css'

import Sobre from '../../components/Sobre'
import Banner from '../../components/Banner'
import Skills from '../../components/Skills'


export default () => {
    useEffect(() => {
        M.AutoInit()
    }, [])

    return (
        <>
            <Banner />
            <Sobre />
            <Skills />
        </>
    )
}