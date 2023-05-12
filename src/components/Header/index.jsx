import React, { useState } from "react";
import style from "./style.module.scss";
import NavIcon from "./NavIcon";
import { NavLink } from "react-router-dom";
import logoTrademap from "assets/image/Logo-TradeMap.png";
import { listHeader } from "./ListHeader";
import Button from "components/Button";
import { ReactComponent as IconUser } from "assets/image/icone-user.svg";
import { ReactComponent as IconLogin } from "assets/image/icone-login.svg";
import { FiMenu } from "react-icons/fi";
import NavBar from "components/NavBar";

const Header = () => {
  const [showmenu, setShowmenu] = useState(false);

  return (
    <header className={style.header}>
      <NavIcon />
      <div className={style.container}>
        <nav className={style.menu}>
          <a href="/">
            <img
              className={style.menu__logo}
              src={logoTrademap}
              alt="Logotipo da empresa trademap"
            />
          </a>
          <ul className={style.menuList}>
            {listHeader.map((list) => {
              return (
                <li className={style.menuList__item} key={list.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `${style.menuList__link} ${
                        isActive ? style.menulistActive : ""
                      }`
                    }
                    to={list.link}
                  >
                    {list.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className={style.containerButton}>
          <NavLink
            style={{ textDecoration: "none" }}
            to="https://rafael-ods.github.io/Login-TradeMap/"
          >
            <Button buttonTransparent="transparent">
              <IconLogin />
              Trademap Web
            </Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to="https://rafael-ods.github.io/Login-TradeMap/"
          >
            <Button>
              <IconUser />
              Cadastre-se Grátis!
            </Button>
          </NavLink>
        </nav>
        <FiMenu
          className={style.menuHamburguer}
          onClick={() => setShowmenu((old) => !old)}
        />
      </div>
      <NavBar showMenu={showmenu} setShowmenu={setShowmenu} />
    </header>
  );
};

export default Header;
