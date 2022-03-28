import React from 'react'
import Skill from '../Skill'


const skills = [
    { nome: 'Python', porcentagem: 90 },
    { nome: 'Kotlin', porcentagem: 70 },
    { nome: 'Spring', porcentagem: 60 },
    { nome: 'JavaScript', porcentagem: 70 },
    { nome: 'Django', porcentagem: 90 },
    { nome: 'ReactJS', porcentagem: 60 },
    { nome: 'PostgreSQL', porcentagem: 70 },
    { nome: 'Português', porcentagem: 100, extra: 'Fluente'},
    { nome: 'Inglês', porcentagem: 60},
]

export default () => {
    return (
        <div className="pb-2">
            {skills.map((current, index) => {
                return <Skill key={index} nome={current.nome} porcentagem={current.porcentagem} extra={current.extra}/>
            })}
        </div>
    )
}