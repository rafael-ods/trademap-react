import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './style.module.scss'

const ButtonStore = ({to, src, alt, background}) => {
  return (
    <div>
      <NavLink to={to}>
           <img className={`${style.button} ${style[background]}`} src={src} alt={alt} /> 
      </NavLink>
    </div>
  )
}

export default ButtonStore
