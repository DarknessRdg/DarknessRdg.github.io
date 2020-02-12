import React from "react";
import Section from "../Section";
import Item from "./Item";

import DjangoParanoidModel from "./DjangoParanoidModel";
import ControleDeFaltas from "./ControleDeFaltas";
import ControleDeComercio from "./ControleDeComercio";

const todos = [DjangoParanoidModel, ControleDeFaltas, ControleDeComercio];

const Conteudo = () => (
  <div className="portifolio-content">
    {todos.map((current, index) => (
      <Item key={index} id={index} portifolio={current} />
    ))}
  </div>
);

export default () => (
  <div className="">
    <Section id="portifolio" title="Portifólio" body={<Conteudo />} />
  </div>
);
