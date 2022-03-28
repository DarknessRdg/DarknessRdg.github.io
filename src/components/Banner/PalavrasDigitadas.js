import React, { useEffect, useState } from "react"


const ADJETIVOS = [
    'Desenvolvedor Web',
    'Programador Competitivo',
    'Entusiasta de Python',
    'Gamer'
]


const TEMPO_CONFIG = {
    digitar: 100,
    apagar: 60,
    esperaEntreLetras: 500,
}


let indexAdjetivo = 0
let indexPalavra = 0



function novoTempo(tempo) {
    return new Promise(res => {
        setTimeout(res, tempo)
    })
}

export default () => {
    const [adjetivoAtual, setAdjetivoAtual] = useState(ADJETIVOS[0])
    const [palavra, setPalavra] = useState('')

    async function apagarPalavra() {
        while (indexPalavra >= 0) {
            setPalavra(adjetivoAtual.slice(0, indexPalavra--));
            await novoTempo(TEMPO_CONFIG.apagar);
        }
    
        indexPalavra = 0;
        indexAdjetivo++;

        if (indexAdjetivo === ADJETIVOS.length) {
            indexAdjetivo = 0;
        }

        setAdjetivoAtual(ADJETIVOS[indexAdjetivo]);

        await novoTempo(TEMPO_CONFIG.esperaEntreLetras);
    }

    async function digitarNovaPalavra() {
        while (indexPalavra <= adjetivoAtual.length) {

            setPalavra(adjetivoAtual.slice(0, indexPalavra++))
            await novoTempo(TEMPO_CONFIG.digitar)
        }

        await novoTempo(TEMPO_CONFIG.esperaEntreLetras)
        apagarPalavra()
    }

    useEffect(() => { digitarNovaPalavra() }, [adjetivoAtual])

    return <h2 className="m-0 white-text bol">Eu sou {palavra}<span>|</span></h2>
}
