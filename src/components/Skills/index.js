import React from 'react'


import Programacao from './Programacao'
import Historico from './Historico'

export default () => (
    <div className="grey lighten-4 pt-3">
        <div className="container">
            <div className="pb-3">
                <h5 className="center bold">Minhas habilidades</h5>
            </div>
            <div className="row">
                <div className="col s12 m12 l5 pb-4">
                    <Historico />
                </div>
                <div className="col s12 m12 l6 offset-l1">
                    <Programacao />
                </div>

            </div>
        </div>
    </div>
)