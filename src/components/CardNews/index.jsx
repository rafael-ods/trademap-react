import React from "react";
import style from "./style.module.scss";
import { RxDoubleArrowRight } from 'react-icons/rx'
const CardNews = ({ post }) => {
  return (
    <article className={style.card}>
      <img className={style.card__img} src={post.src} alt={post.alt} />
      <div>
        <h3 className={style.card__title}>{post.title}</h3>
        <span className={style.card__span}>{post.span} <RxDoubleArrowRight size={8}/></span>
      </div>
    </article>
  );
};

export default CardNews;
