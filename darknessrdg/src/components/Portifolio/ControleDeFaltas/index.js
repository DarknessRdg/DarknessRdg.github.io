import React from "react";

const modal = () => (
  <div className="green">
    <h1 className="center">Oalssssssssss</h1>
  </div>
);

const icon = () => <i className="fas fa-clipboard-list"></i>;

const data = {
  titulo: "Controle de faltas",
  descricao:
    "Projeito para registrar faltas dos aluno do proejto de extensão do IFPI.",
  conteudoModal: modal,
  icon
};

export default data;
