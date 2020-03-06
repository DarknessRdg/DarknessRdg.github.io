import React from "react";

import Banner from "../../../assets/controle_faltas.png";
import Admin from "../../../assets/controle_faltas_admin.png";

export default () => (
  <div className="text-justify">
    <p>
      Este é um site para administrar as aulas do projeto de extenção do IFPI
      realizado com ajuda do laboratório LIMS.
    </p>
    <p>
      O projeto de extensão em questão são aulas para a comunidade de
      Teresina-PI, ofertadas gratuitamente pelo IFPI - Campus Teresina Central,
      na qual é ensinado programação com uma didática mais visual para crianças
      de 8-16 anos que estuam em escola pública.
    </p>
    <div className="row">
      <div className="mt-2 col s12 m12 l6">
        <img src={Banner} className="z-depth-1 materialboxed" alt="home controle de faltas" />
      </div>
      <div className="mt-2 col s12 m12 l6">
        <img src={Admin} className="z-depth-1 materialboxed" alt="admin controle de faltas" />
      </div>
    </div>

    <p className="pt-1">As funcionalidades do site são:</p>
    <ul className="pl-2">
      <li>
        <i className="green-text material-icons align-bottom mr-2">check</i>
        Registrar as aulas
      </li>
      <li>
        <i className="green-text material-icons align-bottom mr-2">check</i>
        Cadastrar os alunos
      </li>
      <li>
        <i className="green-text material-icons align-bottom mr-2">check</i>
        Mostrar cronograma de aulas
      </li>
      <li>
        <i className="green-text material-icons align-bottom mr-2">check</i>
        Fazer chamada dos aluno
      </li>
      <li>
        <i className="green-text material-icons align-bottom mr-2">check</i>
        Ajudar aluno com materiais didáticos
      </li>
    </ul>
    <div className="mt-3 row ml-0">
      <div className="col s12 m6 p-0 mt-2">
        <i className="fab fa-github-alt mr-2 fa-2x align-middle"></i>
        <a
          href="https://github.com/DarknessRdg/controle_de_faltas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositório do código
        </a>
      </div>
    </div>
  </div>
);
