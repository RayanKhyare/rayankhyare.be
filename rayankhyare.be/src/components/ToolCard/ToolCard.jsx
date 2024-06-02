import React from 'react'
import "./toolcard.scss";


export default function ToolCard({ logo , name , siteURL}) {
  return (
    <a href={siteURL} target="_blank" className="tool-card d-flex">
        <img src={logo} alt={name} width={30} height={30} />
        <h3>{name}</h3>
    </a>
  )
}
