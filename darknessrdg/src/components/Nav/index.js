import React, { useRef, useState } from 'react'
import './styles.css'

import Scrollspy from 'react-scrollspy'


const NAV_ITEMS = [
    {'id': 'banner', 'label': 'Home'},
    {'id': 'sobre', 'label': 'Sobre'},
    {'id': 'portifolio', 'label': 'Portifólio'},
    {'id': 'experiencia', 'label': 'Experiências'},
    {'id': 'contato', 'label': 'Contato'}
]

const scrollspsyItems = NAV_ITEMS.map(it => it.id)

const NAV_STYLE = {
    transparent: 'nav-transparent',
    white: 'nav-white'
}

export default () => {
    const nav = useRef()
    const [navClass, setNavClass] = useState(NAV_STYLE.white)

    function updateNavTransparency({ transparentNav }) {
        if (transparentNav)
            setNavClass(NAV_STYLE.transparent)
        else
            setNavClass(NAV_STYLE.white)
    }
    
    function onUpdate(item) {
        if (!item)
            return
        
        const {id} = item
        updateNavTransparency({ transparentNav: id === 'banner'})
    }

    return (
        <nav ref={nav} className={navClass + ' hide-on-med-and-down'}>
            <div className="nav-wrapper navbar container">
                <a href="#banner" className="brand-logo">Luan</a>

                <ul id="nav-mobile" className="right">
                    <Scrollspy
                        items={scrollspsyItems}
                        currentClassName="active"
                        onUpdate={onUpdate}
                        offset={-90}>

                            {NAV_ITEMS.map((it) => 
                                <li>
                                    <a href={`#${it.id}`}> {it.label} </a>
                                </li>
                            )}
                    </Scrollspy>
                </ul>
            </div>
        </nav>
    )
}
