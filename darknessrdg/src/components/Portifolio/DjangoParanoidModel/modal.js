import React from "react";

export default () => (
  <div className="text-justify">
    <p>
      Este é um projeto open source para ser usado com framework web python
      <strong className="bold"> Django</strong>.
    </p>
    <p>
      Ele surgiu devido a necessidade de não deletar as instnâncias dos bancos
      de dados visto que manter os dados salvos é algo fundamental para as
      empresas. Contudo o Django não fornece uma uma opção <em>out of the box</em> para fazer
      isso, fazendo-se necessário o desenvolvedor tomar conta da lógica.
    </p>
    <p>
      Por baixo dos panos, o que ele faz para não deletar os dados é colocar uma
      máscara quando uma instancia do banco é deletada.
    </p>
    <p>
      Essa mascarra é um atributo chamado <em className="bold">deleted_at</em>.
      Nele é salvo a data de delete da instnância, e toda vez que uma busca é
      executada no banco os elementos deletados não são considerados.
    </p>
    <div className="mt-3 row ml-0">
      <div className="col s12 m6 p-0 mt-2">
        <i className="fas fa-book mr-2 fa-2x align-middle"></i>
        <a
          href="https://darknessrdg.github.io/django-paranoid-model/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentação do pacote
        </a>
      </div>
      <div className="col s12 m6 p-0 mt-2">
        <i className="fab fa-github-alt mr-2 fa-2x align-middle"></i>
        <a
          href="https://github.com/DarknessRdg/django-paranoid-model/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositório do código
        </a>
      </div>
    </div>
  </div>
);
