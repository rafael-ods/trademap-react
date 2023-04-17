import React from "react";
import style from "./style.module.scss";
import logoAgencia from "assets/image/Logo-Agencia-TradeMap-350x100-1.png.png";
import { NavLink } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import { listNews } from "./listNews";
import CardNews from "components/CardNews";
const News = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <span className={style.iconLeft}></span>
        <span className={style.iconRigth}></span>
        <div className={style.containerContext}>
          <img
            className={style.containerContext__image}
            src={logoAgencia}
            alt="logotipo trademap"
          />
          <p className={style.containerContext__paragraph}>
            Saiba tudo sobre sobre mercados, empresas, <br/> investimentos,
            macroeconomia e finanças <br/> pessoais.
          </p>
          <NavLink className={style.containerContext__link}>
            ir para noticia
            <CgArrowLongRight />
          </NavLink>
        </div>
        <div className={style.containerCards}>
          {listNews.map((list) => {
            return (
              <NavLink style={{textDecoration: "none"}} key={list.Id}>
                <CardNews post={list} />
              </NavLink>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
