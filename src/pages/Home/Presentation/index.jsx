import React from "react";
import style from "./style.module.scss";
import Logo from "components/Logo";
import ButtonStore from "components/ButtonStore";
import btnApple from "assets/image/btn-apple.png";
import btnGoogle from "assets/image/btn-google.png";
import mockCell from 'assets/image/Mockup-TradeMap-Telas1.png.png'

const Presentation = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.containerContext}>
          <Logo />
          <h1 className={style.containerContext__title}>
            Seus Investimentos na <br /> melhor direção.
          </h1>
          <p className={style.containerContext__paragraph}>
            <b className={style.containerContext__highlighted}>
              Já são mais de 3 milhões
            </b>{" "}
            de investidores que usam <br /> o 
            <b className={style.containerContext__highlighted}> TradeMap</b> para
            gerenciar todo investimento por <br /> um só lugar.
          </p>
          <p className={style.containerContext__highlighted}>
            Não fique de fora dessa.
          </p>
          <div className={style.containerButton}>
            <ButtonStore
              to="https://rafael-ods.github.io/Login-TradeMap/"
              src={btnGoogle}
              alt="icone botão Google Play"
            />
            <ButtonStore
              to="https://rafael-ods.github.io/Login-TradeMap/"
              src={btnApple}
              alt="icone botão Apple"
            />
          </div>
        </div>
        <div className={style.containerImage}> 
            <img className={style.containerImage__img} src={mockCell} alt="imagem de um celular" />
            <div className={style.containerImage__qrcode}></div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
