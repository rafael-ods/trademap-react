import Button from "components/Button";
import Input from "components/Input";
import React from "react";
import style from "./style.module.scss";
import { NewSletter } from "data/context/NewSletter";
import { useContext } from "react";
const Form = ( {registerUser} ) => {
  const { name, setName, email, setEmail } = useContext(NewSletter);

  const HandlePreventDefault = (e) => {
    e.preventDefault()
    registerUser({
      name,
      email
    })

    setName('')
    setEmail('')
    console.log('Evento previndo')
  }

  return (
    <form className={style.form} onSubmit={HandlePreventDefault}>
      <h5 className={style.form__title}>Newsletter</h5>
      <Input
        type="text"
        required
        placeholder="Nome"
        value={name}
        setValue={(value) => setName(value)}
      />
      <Input 
        type="email" 
        required 
        placeholder="E-mail" 
        value={email}
        setValue={(value) => setEmail(value)}
        />
      <div className={style.form__btn}>
        <Button small="small">Assinar</Button>
      </div>
    </form>
  );
};

export default Form;
