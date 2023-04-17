import React from "react";
import { listIcon } from "./listIcon";
import { NavLink } from "react-router-dom";
import style from "./style.module.scss";
const ListIcon = ({ background, position }) => {
  return (
    <nav className={style.menu}>
      <ul className={`${style.menuList} ${style[position]}`}>
        {listIcon.map((list) => {
          return (
            <li className={style.menuList__item} key={list.id}>
              <NavLink
                className={`${style.menuList__link} ${style[background]}`}
                to={list.link}
                target="_blank"
              >
                {list.icon}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ListIcon;
