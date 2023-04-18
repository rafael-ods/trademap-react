import React from "react";
import style from "./style.module.scss";

const Button = ({ children, buttonTransparent, small, btnMobileTransparent }) => {
  return (
    <button
      className={`${style.button} ${style[buttonTransparent]} ${style[small]} ${style[btnMobileTransparent]}`}
    >
      {children}
    </button>
  );
};

export default Button;
