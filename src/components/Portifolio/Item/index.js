import React from "react";
import "./styles.css";

const idPrefix = "modal-portifolio-";
export default props => {
  const { portifolio } = props;

  return (
    <>
      <div className="portifolio-item pl-4 pr-4 pb-4 pt-3 text-left">
        <div className="titulo">
          <h3 className="blue-text">
            {portifolio.icon ? <portifolio.icon /> : undefined}
          </h3>
          <h6 className="bold mb-3">{portifolio.titulo}</h6>
        </div>
        <div className="descricao">
          <p className="text-justify grey-text text-darken-2">
            {portifolio.descricao}
          </p>
        </div>
        <div className="footer">
          <a
            className="modal-trigger blue-text"
            href={`#${idPrefix}${props.id}`}
          >
            Mais detalhes
          </a>
        </div>
        <div className="border"></div>
      </div>
      <div id={`${idPrefix}${props.id}`} className="modal">
        <div className="modal-content">
          <h4 className="bold title">{portifolio.titulo}</h4>
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
