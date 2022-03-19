import React from 'react';
import CardEmpresa from '../CardEmpresa';


export default () => (
    <CardEmpresa
        empresa="Infatec"
        cargoOcupado="Estágio em desenvolvimento web"
        dataInicio="Abril / 2019"
        dataTermino="Outubro / 2020"
        linkEmpresa="https://www.infatec.net.br/"
    >
        <div className="infatec grey-text text-darken-2">
            <p>
                Responsável pelo desenvolvimento de novos sistemas e novas funcionalidades para os sistemas
                já existentes da empresa feitos em Python / Django. Os sistemas eram feitos utilizando padrão Rest API
                e MVC.
            </p>
            <p>
                Na Infatec eu pude trabalhar com diversas tecnologias tanto em frontend quanto em backend.
                A maior parte do meu trabalho era no backend na maioria dos projetos, todavia eu pude trabalhar com ReactJS e VueJS
                como framework frontend em pequenos projetos, o que me possibilitou abrangir meus conhecimentos para outras tecnologias.
            </p>
            <div className="mt-3">
                <p className="mb-2">Tecnologias que tive contato:</p>
                
                <span className="chip">Django</span>
                <span className="chip">Git</span>
                <span className="chip">Gitlab</span>
                <span className="chip">Django Rest Framework</span>
                <span className="chip">Pytest</span>
                <span className="chip">Celery</span>
                <span className="chip">Redis</span>
                <span className="chip">Digital Ocean Bucket</span>
                <span className="chip">MySQL</span>
                <span className="chip">ReactJS</span>
                <span className="chip">VueJS</span>
                <span className="chip">Teste Unitário</span>
            </div>
        </div>
    </CardEmpresa>
)