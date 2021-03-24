import React from 'react'


export default (props) =>
    <div>
        <p className="bold d-inline grey-text text-darken-2">
            {props.nome}
            <span className="right">{props.porcentagem}%</span>
            <span className="right mr-3">{props.extra}</span>
        </p>

        <div className="progress white">
            <div className="determinate blue" style={{ "width": props.porcentagem + '%' }}></div>
        </div>
    </div>
