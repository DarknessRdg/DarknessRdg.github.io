import React, { useRef, useState } from 'react'
import './styles.css'

import Scrollspy from 'react-scrollspy'

const scrollspsyItems = [
    'banner',
    'sobre',
    'portifolio',
    'contato'
]

export default () => {
    const nav = useRef()
    const [navClass, setNavClass] = useState('nav-transparent')

    function navUpdate(opts) {
        if (opts.isOn)
            setNavClass('nav-transparent')
        else
            setNavClass('nav-white')
    }
    
    function onUpdate(item) {
        if (!item)
            return
        
        const {id} = item
        navUpdate({isOn: id === 'banner'})
    }

    return (
        <nav ref={nav} className={navClass + ' hide-on-med-and-down'}>
            <div className="nav-wrapper navbar container">
                <a href="#!" className="brand-logo">Luan</a>
                <ul id="nav-mobile" className="right">
                    <Scrollspy
                        items={scrollspsyItems}
                        currentClassName="active"
                        onUpdate={onUpdate}
                        offset={-90}>
                        <li><a href="#banner">Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#portifolio">Portifólio</a></li>
                        <li><a href="#!">Contato</a></li>
                    </Scrollspy>
                </ul>
            </div>
        </nav>
    )
}
