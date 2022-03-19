import React from "react";
import "./styles.css";

import Curriculo from "../../../assets/luan da silva rodrigues.pdf";

function calculateAge(birthMonth, birthDay, birthYear) {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth();
  var currentDay = currentDate.getDate(); 
  var calculatedAge = currentYear - birthYear;

  if (currentMonth < birthMonth) {
      calculatedAge--;
  }

  if (birthMonth === currentMonth && currentDay < birthDay) {
      calculatedAge--;
  }

  return calculatedAge;
}

export default () => {
  const age = calculateAge(9, 26, 2000);

  return (
    <div id="sobre-mim-texto">
      <h4 className="left-align mt-5">Olá</h4>
      <div className="text-justify mt-5 mb-4">
        <p className="grey-text text-darken-2">
          Eu sou <strong className="bold">Luan Rodrigues</strong>. Sou
          programador web, apaixonado por programação desde quando iniciei minha
          graduação em Análise e Desenvolvimento de Sistemas pelo IFPI em 2018.
          Contudo vi a necessidade de ampliar os meus conhecimentos, por isso
          decidir trocar de curso e atualmente estou no 4° periodo de Ciências
          da Computação pela UESPI.
        </p>
      </div>
      <div className="row mt-4 left-align">
        <div className="col s12 m6">
          <h6 className="grey-text text-darken-2">
            <span className="bold black-text">Nome:</span> Luan da Silva
            Rodrigues
          </h6>
        </div>
        <div className="col s12 m6">
          <h6 className="grey-text text-darken-2">
            <span className="bold black-text">Endereço:</span> Teresina, PI,
            Brasil
          </h6>
        </div>
        <div className="col s12 m6">
          <h6 className="grey-text text-darken-2">
            <span className="bold black-text">Idade:</span> {age}
          </h6>
        </div>
        <div className="col s12 m6">
          <h6 className="grey-text text-darken-2">
            <span className="bold black-text">WhatsApp:</span> (86) 9 9990-1099
          </h6>
        </div>
        <div className="col s12 m6">
          <h6 className="grey-text text-darken-2">
            <span className="bold black-text">Telefone:</span> (86) 9 8175-4954
          </h6>
        </div>
        <div className="col s12">
          <h6 className="grey-text text-darken-2">
            <span className="bold black-text">Email:</span>{" "}
            luanrodriguesbuisness@hotmail.com
          </h6>
        </div>
      </div>

      <div className="mt-5 pt-5 left-align row">
        <a
          href={Curriculo}
          target="_blank"
          rel="noopener noreferrer"
          className="col s5 btn blue waves-effect waves-light btn-large"
        >
          <span className="v-aling-center">
            DOWNLOAD CV
            <i className="pl-2 material-icons hide-on-small-only">
              description
            </i>
          </span>
        </a>

        <a
          href="#contato"
          className="col s5 offset-s1 btn blue waves-effect waves-light btn-large"
        >
          <span className="v-aling-center">
            CONTACT-ME
            <i className="pl-2 material-icons hide-on-small-only">
              assignment_ind
            </i>
          </span>
        </a>
      </div>
    </div>
  );
};
