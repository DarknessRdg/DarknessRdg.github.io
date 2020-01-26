import React from 'react'
import './styles.css'

export default (props) => (

    <div id={props.id} className="section pb-0">
        <div className="container">
            <div className="d-block center mb-5">
                <h3 className="center bold section-title"><span>{props.title}</span></h3>
            </div>

            <div className="center">
                {props.body}
            </div>

        </div>
    </div>
)