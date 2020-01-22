import React, { useEffect } from 'react'
import M from 'materialize-css'

import Sobre from '../../components/Sobre'


export default () => {
    useEffect(() => {
        M.AutoInit()
    }, [])

    return (
        <>
            <Sobre />
        </>
    )
}