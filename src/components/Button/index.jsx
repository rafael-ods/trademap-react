import React from "react";
import style from "./style.module.scss";

const Button = ({ children, buttonTransparent, small }) => {
  return (
    <button
      className={`${style.button} ${style[buttonTransparent]} ${style[small]}`}
    >
      {children}
    </button>
  );
};

export default Button;
