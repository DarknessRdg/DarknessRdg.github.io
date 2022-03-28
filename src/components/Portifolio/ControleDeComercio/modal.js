import React from "react";

import statics from "../../../statics";

export default () => (
  <div className="text-justify">
    <p>
      Este é um projeto feito para automzatizar as vendas dos produtos de um
      comércio.
    </p>
    <p>
      Nele os produtos do comércio são cadastrados previamente com seus códigos
      de barras. Quando o cliente for comprar, existe um módulo para adicionar
      os produtos do cliente a um carrinho e no final pagar a conta, assim como
      um caixa de loja atualmente.
    </p>
    <p>
      Existe também módulos para controlas as notinhas emitidas, tanto por
      cliente, como por status dela que pode ser uma notinha paga ou fiada.
    </p>
    <p>
      Ao finalizar a compra é emitido uma chamada a impressão para imprimir a
      notinha da carrinho de compras atual.
    </p>
    <div className="row mt-3">
      <div className="col s12 m6">
        <img src={statics.CONTROLE_COMERCIO_IMG_HOME} alt="home controle comércio" className="materialboxed z-depth-1" />
      </div>
      <div className="col s12 m6">
        <img src={statics.CONTROLE_COMERCIO_IMG_VENDAS} alt="venda controle comércio" className="materialboxed z-depth-1" />
      </div>
    </div>
    
    <div className="mt-3 row ml-0">
      <div className="col s12 m6 p-0 mt-2">
        <i className="fab fa-github-alt mr-2 fa-2x align-middle"></i>
        <a
          href="https://github.com/DarknessRdg/controle_comercio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositório do código
        </a>
      </div>
    </div>
  </div>
);
