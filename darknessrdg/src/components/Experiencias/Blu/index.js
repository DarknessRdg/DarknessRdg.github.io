import React from 'react';
import CardEmpresa from '../CardEmpresa';

const TECNOLOGIAS = [
    'Kotlin',
    'Spring Boot',
    'Spring Data JPA',
    'Kafka',
    'Microsserviços',
    'Maven',
    'PostgreSQL',
    'TDD',
    'Teste E2E',
    'Teste unitário',
    'Scrum',
    'Code review'
]

export default () => (
    <CardEmpresa
        empresa="Blu by BS2"
        cargoOcupado="Desenvolvedor web backend"
        dataInicio="Novembro / 2020"
        linkEmpresa="https://blubybs2.com/"
    >
        <div className="infatec grey-text text-darken-2">
            <p>
                Responsável pelo desenvolvimento dos sistemas usando Kotlin e Spring Boot.
                Parte do meu trabalho involve manutenção em infraestrutura, como configurações de arquivo
                de arquivos de deploy do kubernetes e ferramenta de CI.
            </p>
            <div className="mt-3">
                <p className="mb-2">Tecnologias que tive contato:</p>
                
                {TECNOLOGIAS.map(it => <span className="chip">{it}</span>)}
            </div>
        </div>
    </CardEmpresa>
)