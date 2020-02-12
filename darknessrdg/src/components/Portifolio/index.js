import React from "react";
import Section from "../Section";
import Item from "./Item";

import DjangoParanoidModel from "./DjangoParanoidModel";
import ControleDeFaltas from "./ControleDeFaltas";

const todos = [DjangoParanoidModel, ControleDeFaltas];

const Conteudo = () => (
  <div className="portifolio-content">
    {todos.map((current, index) => (
      <Item id={index} portifolio={current} />
    ))}
    {todos.map((current, index) => (
      <Item id={index} portifolio={current} />
    ))}
    {todos.map((current, index) => (
      <Item id={index} portifolio={current} />
    ))}
  </div>
);

export default () => (
  <div className="">
    <Section id="portifolio" title="Portifólio" body={<Conteudo />} />
  </div>
);
