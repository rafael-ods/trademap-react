import React, { useState } from "react";
import style from "./style.module.scss";
import Logo from "components/Logo";
import ListIcon from "components/ListIcon";
import ListFooter from "./ListFooter";
import Form from "components/Form";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [users, setUsers] = useState([]);

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.boxTrademap}>
          <Logo />
          <h5 className={style.boxTrademap__title}>somos o trademap</h5>
          <p className={style.boxTrademap__paragraph}>
            Nossa missão é oferecer a mais completa plataforma do mercado
            financeiro para todos os tipos de investidores!​
          </p>
          <ListIcon background="background" position="position" />
        </div>
        <div className={style.boxContact}>
          <h5 className={style.boxContact__title}>Contato</h5>
          <b className={style.boxContact__email}>suporte@trademap.com.br</b>
          <p className={style.boxContact__paragraph}>
            Av General Furtado Nascimento, 740, cj 55, Alto de Pinheiros São
            Paulo – SP – CEP 05465-070 CNPJ 10.535.290/0001-21
          </p>
          <h5 className={style.boxContact__title}>Imprensa</h5>
          <b className={style.boxContact__email}>imprensa@trademap.com.br</b>
        </div>
        <div className={style.boxListFooter}>
          <ListFooter title="Informações" />
        </div>
        <Form
          registerUser={(user) => setUsers([...users, console.log(user)])}
        />
      </div>
      <div className={style.term}>
        <div className={style.containerTerm}>
          <p>Uma marca do grupo Valemobi – 2023 © All Rights Reserved.</p>
          <NavLink to="https://trademap.com.br/termos-de-uso-e-politica-de-privacidade">
            Termos de Uso e Política de Privacidade
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
