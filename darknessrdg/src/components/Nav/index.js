import React, { useEffect } from 'react'
import './styles.css'

import scrollspsy from '../../utils/scrollspy'

export default () => {
    useEffect(() => {
        scrollspsy()
    }, [])
    return (
        <nav className="nav-transparent scrollspsy-content">
            <div className="nav-wrapper navbar container">
                <a href="#!" className="brand-logo" data-target="banner">Luan</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#sobre" data-target="sobre">Sobre</a></li>
                    <li><a href="#portifolio">Portifólio</a></li>
                    <li><a href="#!">Contato</a></li>
                </ul>
            </div>
        </nav>
    )
}
