import React from 'react'
import './styles.css'

import PalavrasDigitadas from './PalavrasDigitadas'
import SocialLinks from './SocialLinks'
import config from '../../config';

export default () => {
    return (
        <div id="banner" className="parallax-container">
            <div className="parallax bg-cover">
                <img src={config.BANNER_IMG_URL} alt="Luan Rodrigues cover" />
            </div>

            <div className="bg-cover">
                <div className="black-cover">
                    <div className="h-vh v-aling-center container">
                        <div className="row center">
                            
                            <PalavrasDigitadas />

                            <h6 className="grey-text text-lighten-1 mt-4">
                                Gamer por paixão e
                            </h6>
                            <h6 className="grey-text text-lighten-1">
                                <strong className="bold">Programador</strong> nas horas vagas.
                            </h6>

                            <SocialLinks />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
