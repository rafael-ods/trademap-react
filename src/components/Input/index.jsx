import React from "react";
import style from './style.module.scss'

const Input = ({ type, required = false, placeholder, value, setValue }) => {
  return (
    <div className={style.formGroup}>
      <input
        className={style.formGroup__input}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
 