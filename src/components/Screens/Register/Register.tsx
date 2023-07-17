import AuthTextField from "@/components/Common/AuthTextField/AuthTextField";
import styles from "./Register.module.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "@/utils/const";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [passrepeat, setPassrepeat] = useState<string>("");

  const handleSubmit = () => {};
  return (
    <form className={styles.form}>
      <h1>Регистрация</h1>
      <label htmlFor="nickname">Ник:</label>
      <AuthTextField
        value={nickname}
        setValue={setNickname}
        placeholder="Введите ваш ник"
        id="nickname"
      />
      <label htmlFor="email">Email:</label>
      <AuthTextField
        value={email}
        setValue={setEmail}
        placeholder="Введите ваш email"
        id="email"
      />
      <label htmlFor="password">Пароль:</label>
      <AuthTextField
        value={password}
        setValue={setPassword}
        placeholder="Введите ваш пароль"
        id="password"
        type="password"
      />
      <label htmlFor="passrepeat">Повтор пароля:</label>
      <AuthTextField
        value={passrepeat}
        setValue={setPassrepeat}
        placeholder="Повторите пароль"
        id="passrepeat"
        type="password"
      />
      <button onClick={handleSubmit}>Войти</button>
      <NavLink to={LOGIN_ROUTE}>Есть аккаунт? Войдите!</NavLink>
    </form>
  );
};

export default Register;
