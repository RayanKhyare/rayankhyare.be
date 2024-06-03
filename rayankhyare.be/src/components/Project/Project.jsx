import React from 'react'
import "./project.scss"
import ToolCard from '../ToolCard/ToolCard'
import ReactLogo from '../../assets/reactjs.svg';

export default function Project() {
  return (
    <>
    <h1>Learnify</h1>
    <p>A new way to make online lessons less boring</p>

    <section className='technologies'>
    <h2>Technologies</h2>
    

    <div className='technologies-container'>
        <ToolCard logo={ReactLogo} name={'React'} siteURL={'https://reactjs.org/'} />
    </div>
    </section>
    </>
  )
}
