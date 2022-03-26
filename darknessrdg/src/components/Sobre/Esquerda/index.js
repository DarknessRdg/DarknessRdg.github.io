import React from 'react'
import './styles.css'

import config from '../../../config'


export default () => {

    return (
        <div className="about-me-img-content left-align">
            <img src={config.ME_PROFILE_IMG_URL} alt="Luan Rodrigues"/>
        </div>
    )
}