import React, { useRef, useState } from "react";
import "./styles.css";
import M from "materialize-css";

import Section from "../Section";

import Email from "../../services/Email";

const Conteudo = () => {
  const nome = useRef();
  const email = useRef();
  const mensagem = useRef();

  const [enviandoEmail, setEnviandoEmail] = useState(false);

  function showMessage(message, success = true) {
    const color = success ? "green" : "red";
    M.toast({ html: message, classes: "bottom " + color });
  }

  function areDataValid() {
    let feedBack;
    // eslint-disable-next-line
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!nome.current.value) feedBack = "Nome não pode estar vazio";
    else if (!email.current.value) feedBack = "Qual seu email?";
    else if (!mensagem.current.value) feedBack = "Digite uma mensagem";
    else if (!email.current.value.match(emailRegex))
      feedBack = "Email inválido";

    if (feedBack) {
      showMessage(feedBack, false);
      return false;
    }
    return true;
  }

  async function senEmail(e) {
    e.preventDefault();

    setEnviandoEmail(true);
    if (!areDataValid()) {
      setEnviandoEmail(false);
      return;
    }

    const data = {
      subject: nome.current.value,
      from: email.current.value,
      message: mensagem.current.value
    };

    const mensagemDeError = "Ocorreu um error, tente novamente mais tarde!";
    const mensagemDeSucesso = "Email enviado!";
    try {
      const r = await Email.post("/send-email/", data);

      if (r.status === 200) showMessage(mensagemDeSucesso);
      else showMessage(mensagemDeError, false);
    } catch (e) {
      showMessage(mensagemDeError, false);
    }

    setEnviandoEmail(false);
  }

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
        <button
          className={"btn blue btn-large " + (enviandoEmail ? "disabled" : "")}
          onClick={e => senEmail(e)}
        >
          {enviandoEmail ? "" : "Enviar"}

          <div
            class={
              "preloader-wrapper small mt-2 " +
              (enviandoEmail ? "active" : "hide")
            }
          >
            <div class="spinner-layer spinner-blue-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div>
              <div class="gap-patch">
                <div class="circle"></div>
              </div>
              <div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default () => (
  <div className="grey lighten-4">
    <Section id="contato" title="Contato" body={<Conteudo />} />
  </div>
);
