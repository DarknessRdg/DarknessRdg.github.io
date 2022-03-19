import React from "react";
import Section from "../Section";
import Blu from "./Blu";
import Infatec from "./Infatec";
import "./style.scss";

export default () => (
    <div className="grey lighten-4">
        <Section id="" title="Experiências de trabalho">
            <div className="pb-4">
                <Blu />
                <Infatec />
            </div>
        </Section>
    </div>
);
