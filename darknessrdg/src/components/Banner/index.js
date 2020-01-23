import React, { useState, useEffect } from 'react'
import './styles.css'

import BannerImg from '../../assets/banner.jpeg'


const ADJETIVOS = [
    'Web Developer',
    'Competitive Programmer',
    'Gamer',
    'Python Lover',
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
        indexAdjetivo = indexAdjetivo === ADJETIVOS.length - 1 ? 0 : indexAdjetivo + 1

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
                <div className="h-vh v-aling-center container">
                    <div className="row center">
                        <h2 className="m-0 white-text bol">Eu sou {palavra}<span>|</span></h2>
                        <h6 className="grey-text text-lighten-1 mt-4">
                            Gamer, judoka, violonista por paixão e
                        </h6>
                        <h6 className="grey-text text-lighten-1">
                            <strong className="bold">Progamador</strong> nas horas vagas.
                        </h6>
                        <div className="links-content">
                            <span>
                                <a href="https://github.com/DarknessRdg/" className="white-text">
                                    <i className="fab fa-github"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://www.facebook.com/luan.dasilva.925" className="white-text">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://www.instagram.com/luan_26/" className="white-text">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}