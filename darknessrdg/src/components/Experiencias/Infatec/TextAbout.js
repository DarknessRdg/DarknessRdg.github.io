import React from 'react'

export default () => (
    <div className="text-left">
        <h4>Infatec</h4>
        <h6>Estágio em desenvolvimento web</h6>
        <div className="mb-5 data white-text">
            <span className="blue">Abril/2019</span>
            <span className="blue">Outubro/2020</span>
        </div>
        <p>Responsável pelo desenvolvimento de novos sistemas e novas funcionalidades para os sistemas
        já existentes da empresa feitos em Python / Django. Os sistemas eram feitos utilizando padrão Rest API
        e MVC.
        </p>
        <p>Na Infatec eu pude trabalhar com diversas tecnologias tanto em frontend quanto em backend.
            Na maioria dos projetos maior parte do meut trabalho era no backend, todavia eu pude trabalhar com ReactJS
            como framework frontend, o que me possibilitou abrangir meus conhecimentos para outras tecnologias.
        </p>
        <p>
            Vou citar aqui uma lista de tecnologias que tive a oportunidade de trablhar:
            <ul>
                <li>
                    <span className="bold">Git :</span> trabalhei pela primeira vez utilizando git com uma equipe.
                    Um ótima experiência de como trablhar utilizando, git-flow e feature branches.
                </li>
                <li>
                    <span className="bold">Django :</span> framework web que utilizei para trabalho.
                </li>
                <li>
                    <span className="bold">Django Rest Framework :</span> framework web que facilita a criação de API utilizando Django
                    para criação da API Rest dos sistemas da empresa.
                </li>
                <li>
                    <span className="bold">Celery :</span> utilizei o framework para python para criação de tarefas
                    agendadas e executadas de forma assíncronas.
                </li>
                <li>
                    <span className="bold">Redis :</span> utilizei o banco de dados para criação de uma fila para processamento
                    de grande quantidade de dados.
                </li>
                <li>
                    <span className="bold">Digital Ocean Bucket :</span> integrei o sistema com o serviço na nuvem para upload de arquivos.
                </li>
            </ul>
        </p>
    </div>
)
