import React from "react";
import style from "./style.module.scss";
import { listLogo } from "./listLogo";
const MultiBroker = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.containerContext}>
          <h3 className={style.containerContext__title}>
            Negocie seus ativos num único APP
          </h3>
          <p className={style.containerContext__paragraph}>
            Com o Multibroker, você negocia criptomoedas, ações na B3 e no
            mercado americano <br /> diretamente pelo TradeMap.
          </p>
          <p className={style.containerContext__paragraph}>
            Corretoras Parceiras:
          </p>
        </div>
        <div className={style.containerLogo}>
          <ul className={style.menuList}>
            {listLogo.map((logo) => {
              return (
                <li className={style.menuList__item} key={logo.id}>
                  <img
                    className={style.menuList__img}
                    src={logo.icone}
                    alt={logo.alt}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MultiBroker;
