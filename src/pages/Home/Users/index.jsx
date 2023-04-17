import React from "react";
import style from "./style.module.scss";
import ButtonStore from "components/ButtonStore";
import btnApple from "assets/image/btn-apple.png";
import btnGoogle from "assets/image/btn-google.png";
const Users = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.containerContext}>
          <h4 className={style.containerContext__title}>
            +3 milhões de usuários.
          </h4>
          <p className={style.containerContext__paragraph}>
            Somos o App de finanças  mais popular entre os investidores!
          </p>
          <div className={style.containerButton}>
            <ButtonStore
              to="https://rafael-ods.github.io/Login-TradeMap/"
              src={btnApple}
              alt="icone botão Apple"
              background="background"
            />

            <ButtonStore 
              to="https://rafael-ods.github.io/Login-TradeMap/"
              src={btnGoogle}
              alt="icone botão Google play"
              background="background"
            />
          </div>
        </div>
        <div className={style.container__banner}></div>
      </div>
    </section>
  );
};

export default Users;
