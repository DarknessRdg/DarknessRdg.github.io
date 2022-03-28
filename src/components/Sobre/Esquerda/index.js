import React from 'react'
import './styles.css'

import statics from '../../../statics'


export default () => {

    return (
        <div className="about-me-img-content left-align">
            <img src={statics.ME_PROFILE_IMG_URL} alt="Luan Rodrigues"/>
        </div>
    )
}