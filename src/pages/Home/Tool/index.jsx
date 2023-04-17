import React from "react";
import style from "./style.module.scss";
import { listTool } from "./listTool";

const Tools = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.cell}></div>
        <div className={style.containerContext}>
          <h2 className={style.containerContext__title}>
            Esteja sempre um passo <br /> a frente com as melhores ferramentas
          </h2>
          <ul className={style.menuList}>
            {listTool.map((list) => {
              return (
                <li className={style.menuList__item} key={list.id}>
                  <img
                    className={style.menuList__img}
                    src={list.icone}
                    alt={list.alt}
                  />
                  <p className={style.menuList__paragraph}>{list.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tools;
