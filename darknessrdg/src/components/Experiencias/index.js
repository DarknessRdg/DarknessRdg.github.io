import React from "react";
import Section from "../Section";
import Infatec from "./Infatec";
import "./style.scss";

export default () => (
    <div className="grey lighten-4">
        <Section id="experiencia" title="Experiências de trabalho">
            <div className="experiencia-content">
                <Infatec />
            </div>
        </Section>
    </div>
);
