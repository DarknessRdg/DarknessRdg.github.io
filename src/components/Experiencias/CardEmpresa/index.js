import React from 'react';
import './style.scss';

export default function CardEmpresa({ empresa, linkEmpresa, cargoOcupado, dataInicio, dataTermino, children }) {
    const empregoAtual = dataTermino === undefined;

    let divisor = 'a';
    if (empregoAtual) {
        divisor = 'até o';
    }

    let termino = dataTermino;
    if (empregoAtual) {
        termino = 'momento';
    }

    return <div className="card-empresa">
        <div className="empresa">
            <div className="data">
                <div>{dataInicio}</div>
                <div className="mt-1 mb-1">{divisor}</div>
                <div>{termino}</div>
            </div>

            <div className="conteudo">
                <div className="titulo">
                    <h4><a href={linkEmpresa} target="_blank" rel="noopener noreferrer">{empresa}</a></h4>
                    <h6>{cargoOcupado}</h6>
                </div>

                <div>
                    {children}
                </div>
            </div>
        </div>
    </div>
}
