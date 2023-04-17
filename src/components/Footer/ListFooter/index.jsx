import React from 'react'
import { NavLink } from 'react-router-dom'
import { listFooter } from './listFooter'
import style from './style.module.scss'

const ListFooter = ({title}) => {
  return (
    <ul className={style.menuList}>
      <h5 className={style.menuList__title}>{title}</h5>
      {listFooter.map((list) => {
        return (
            <li className={style.menuList__item} key={list.id}>
                <NavLink className={style.menuList__link} to={list.link} target='_blank'>
                    {list.title}
                </NavLink>
            </li>
        )
      })}
    </ul>
  )
}

export default ListFooter
