import React from "react";

import Banner from "../../../assets/controle_comercio.png";
import Compra from "../../../assets/controle_comercio_compra.png";

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
        <img src={Banner} alt="home controle comércio" />
      </div>
      <div className="col s12 m6">
        <img src={Compra} alt="venda controle comércio" />
      </div>
    </div>
  </div>
);
