import React from "react";
import style from "./style.module.scss";
import { navList } from "./navList";
import { NavLink } from "react-router-dom";
import ListIcon from "components/ListIcon";
const NavIcon = () => {
  return (
    <div className={style.container}>
      <div className={style.containerDiv}>
        <nav className={style.menu}>
          <ul className={style.menuList}>
            {navList.map((list) => {
              return (
                <li className={style.menuList__item} key={list.id}>
                  <NavLink className={style.menuList__link} to={list.link} target="_blank">
                    <img className={style.menuList__image} src={list.icon} alt={list.alt} />
                    <span className={style.menuList__span}>{list.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav >
        <div className={style.navIcon}>
            <ListIcon/>
        </div>
      </div>
    </div>
  );
};

export default NavIcon;
