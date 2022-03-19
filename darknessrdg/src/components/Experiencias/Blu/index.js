import React from 'react';
import CardEmpresa from '../CardEmpresa';


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
                
                <span className="chip">Kotlin</span>
                <span className="chip">Spring Boot</span>
                <span className="chip">Spring Data JPA</span>
                <span className="chip">Kafka</span>
                <span className="chip">Microsserviços</span>
                <span className="chip">Maven</span>
                <span className="chip">PostgreSQL</span>
                <span className="chip">TDD</span>
                <span className="chip">Teste E2E</span>
                <span className="chip">Teste unitário</span>
                <span className="chip">Scrum</span>
                <span className="chip">Code review</span>
            </div>
        </div>
    </CardEmpresa>
)