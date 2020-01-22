import React from 'react'
import './styles.css'

export default (props) => (

    <div id={props.id} className="section">
        <div className="container">
            <div className="d-block center mb-5">
                <h3 className="center bold section-title"><span>{props.title}</span></h3>
            </div>

            <div className="row center">
                <div className="col s12 m6">
                    {props.left}
                </div>
                <div className="col s12 m6">
                    {props.right}
                </div>
            </div>
        </div>
    </div>
)