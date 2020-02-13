import React, { useRef } from "react";
import "./styles.css";

import Section from "../Section";

const Conteudo = () => {
  const nome = useRef();
  const email = useRef();
  const mensagem = useRef();

  return (
    <form className="container">
      <div className="input-field col s12">
        <input ref={nome} type="text" id="nome" />
        <label htmlFor="nome">Seu nome</label>
      </div>
      <div className="input-field col s12">
        <input ref={email} type="text" id="email" />
        <label htmlFor="email">Seu email</label>
      </div>
      <div className="input-field col s12">
        <textarea
          ref={mensagem}
          type="email"
          id="mensagem"
          className="materialize-textarea"
          style={{ height: "90px" }}
        ></textarea>
        <label htmlFor="mensagem">Sua mensagem</label>
      </div>
      <div className="mt-5">
        <button className="btn blue btn-large">Enviar</button>
      </div>
    </form>
  );
};

export default () => (
  <div className="grey lighten-4">
    <Section id="contato" title="Contato" body={<Conteudo />} />
  </div>
);
