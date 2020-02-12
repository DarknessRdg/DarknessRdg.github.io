import React from "react";
import "./styles.css";

const idPrefix = "modal-portifolio-";
export default props => {
  const { portifolio } = props;

  return (
    <>
      <div className="portifolio-item p-4">
        <div className="titulo">
          <h5 className="mb-3">{portifolio.titulo}</h5>
          <h5 className="mb-0">
            {portifolio.icon ? <portifolio.icon /> : undefined}
          </h5>
        </div>
        <div className="descricao valign-wrapper">
          <p className="text-justify grey-text text-darken-2">
            {portifolio.descricao}
          </p>
        </div>
        <div className="footer">
          <a
            className="modal-trigger waves-effect waves-green btn-flat blue-text"
            href={`#${idPrefix}${props.id}`}
          >
            Mais detalhes
          </a>
        </div>
        <div className="border"></div>
      </div>
      <div id={`${idPrefix}${props.id}`} className="modal">
        <div className="modal-content">
          <h4 className="bold">{portifolio.titulo}</h4>
          <div className="conteudo">{<portifolio.conteudoModal />}</div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Fechar
          </a>
        </div>
      </div>
    </>
  );
};
