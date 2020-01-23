import React from 'react'
import './styles.css'


export default () =>
    <nav className="nav-transparent">
        <div className="nav-wrapper navbar container">
            <a href="#!" className="brand-logo ">Luan</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#portifolio">Portifólio</a></li>
                <li><a href="#!">Contato</a></li>
            </ul>
        </div>
    </nav>