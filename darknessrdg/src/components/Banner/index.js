import React, { useState, useEffect } from 'react'

import BannerImg from '../../assets/banner.jpeg'


const ADJETIVOS = [
    'Web Developer',
    'Competitive Programmer',
    'Python lover',
    'Judoka'
]


function novoTempo(tempo) {
    return new Promise(res => {
        setTimeout(res, tempo)
    })
}

const tempoDigitar = 100
const tempoApagar = 60
const tempoEspera = 500

let indexAdjetivo = 0
let indexPalavra = 0


export default () => {
    const [adjetivoAtual, setAdjetivoAtual] = useState(ADJETIVOS[0])
    const [palavra, setPalavra] = useState('')

    

    async function apagarPalavra() {
        while (indexPalavra >= 0) {
            setPalavra(adjetivoAtual.slice(0, indexPalavra--))
            await novoTempo(tempoApagar)
        }

        indexPalavra = 0
        indexAdjetivo =  indexAdjetivo === ADJETIVOS.length - 1 ? 0 : indexAdjetivo + 1   
        
        setAdjetivoAtual(ADJETIVOS[indexAdjetivo])
        
        await novoTempo(tempoEspera)
        
    }

    async function digitarNovaPalavra() {
        while (indexPalavra <= adjetivoAtual.length) {
            
            setPalavra(adjetivoAtual.slice(0, indexPalavra++))
            await novoTempo(tempoDigitar)
        }
        
        await novoTempo(tempoEspera)
        apagarPalavra()
    }

    useEffect(() => {
        digitarNovaPalavra()
        // eslint-disable-next-line 
    }, [adjetivoAtual])

    return (
        <div id="banner" className="bg-cover" style={{ 'backgroundImage': `url(${BannerImg})` }}>
            <div className="black-cover">
                <div className="h-vh v-aling-center">
                    <h1 className="m-0 white-text">Eu sou, {palavra}<span>|</span></h1>
                </div>
            </div>
        </div>
    )
}