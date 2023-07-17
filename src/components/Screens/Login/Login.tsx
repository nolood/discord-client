import AuthTextField from "@/components/Common/AuthTextField/AuthTextField";
import styles from "./Login.module.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { REGISTER_ROUTE } from "@/utils/const";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = () => {};
  return (
    <form className={styles.form}>
      <h1>Авторизация</h1>
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
      <button onClick={handleSubmit}>Войти</button>
      <NavLink to={REGISTER_ROUTE}>Есть аккаунт? Войдите!</NavLink>
    </form>
  );
};

export default Login;
