import Button from "components/Button";
import style from "./style.module.scss";
import { CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { TfiDownload } from "react-icons/tfi";
import { listHeader } from "components/Header/ListHeader";
import logoTrademap from "assets/image/Logo-TradeMap.png";
import { navList } from "components/Header/NavIcon/navList";
import { ReactComponent as IconLogin } from "assets/image/icone-login.svg";

const NavBar = ({ showMenu, setShowmenu }) => {
  return (
    <aside className={`${style.menu} ${showMenu ? style["menu--active"] : ""}`}>
      <div className={style.containerBg}>
        <div className={style.boxLogo}>
          <a href="/">
            <img
              className={style.boxLogo__logoTradmap}
              src={logoTrademap}
              alt="Logotipo da empresa trademap"
            />
          </a>
          <CgClose
            className={style.boxLogo__icon}
            onClick={() => setShowmenu()}
          />
        </div>
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
        <ul className={style.menuIcon}>
          {navList.map((list) => {
            return (
              <li className={style.menuIcon__item} key={list.id}>
                <NavLink
                  className={style.menuIcon__link}
                  to={list.link}
                  target="_blank"
                >
                  <img
                    className={style.menuIcon__image}
                    src={list.icon}
                    alt={list.alt}
                  />
                  <span className={style.menuIcon__span}>{list.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <NavLink
          style={{ textDecoration: "none" }}
          to="https://rafael-ods.github.io/Login-TradeMap/"
        >
          <Button btnMobileTransparent="mobile">
            <IconLogin />
            TradeMap Web
          </Button>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          to="https://rafael-ods.github.io/Login-TradeMap/"
        >
          <Button>
            <TfiDownload size={18} />
            Baixe o app gratís!
          </Button>
        </NavLink>
      </div>
    </aside>
  );
};

export default NavBar;
