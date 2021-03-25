import React from 'react';
import TextAbout from './TextAbout';


export default () => (
    <div className="infatec empresa-content">
        <div className="empresa-logo">
            <img src="http://www.infatec.net.br/blog/wp-content/themes/infatec/img/logo.png" alt="Infatec, soluções tecnológicas"/>
        </div>

        <div className="right">
            <TextAbout />
        </div>
    </div>
)