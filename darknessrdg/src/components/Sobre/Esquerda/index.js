import React from 'react'
import './styles.css'

import ImagemPerfil from '../../../assets/me.jpg'


export default () => {

    return (
        <div className="about-me-img-content">
            <img src={ImagemPerfil} alt="Luan Rodrigues"/>
        </div>
    )
}