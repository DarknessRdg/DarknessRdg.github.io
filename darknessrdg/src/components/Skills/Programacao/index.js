import React from 'react'
import Skill from '../Skill'


const skills = [
    { nome: 'Python', porcentagem: 90 },
    { nome: 'C/C++', porcentagem: 60 },
    { nome: 'JavaScript', porcentagem: 80 },
    { nome: 'ReactJS', porcentagem: 60 },
    { nome: 'CSS', porcentagem: 40 },
    { nome: 'PostgreSQL', porcentagem: 70 },
    { nome: 'Inglês', porcentagem: 60 },
]

export default () => {
    return (
        <>
            {skills.map((current, index) => {
                return <Skill key={index} nome={current.nome} porcentagem={current.porcentagem} />
            })}
        </>
    )
}