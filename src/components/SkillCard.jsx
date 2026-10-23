import React from 'react'

function SkillCard ({nombre,nivel}) {
  return (
    <li>
        <strong>{nombre}</strong>
        <a></a>
        <span>{nivel}</span>
    </li>
  )
}

export default SkillCard