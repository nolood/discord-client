import styles from "./Login.module.scss";
import { NavLink } from "react-router-dom";
import { REGISTER_ROUTE } from "@/utils/const";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormLogin } from "@/types/IFormLogin";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLogin>();

  const emailError = {
    error: !!errors?.email,
    message: errors?.email?.message || "Некорректная длина",
  };

  const passwordError = {
    error: !!errors?.password,
    message: errors?.password?.message || "Некорректная длина",
  };

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1>Авторизация</h1>
      <label
        className={
          emailError.error
            ? `${styles.label} ${styles.errortext}`
            : styles.label
        }
        htmlFor="email"
      >
        Email:
      </label>
      <input
        className={
          emailError.error ? `${styles.input} ${styles.error}` : styles.input
        }
        type="text"
        placeholder="Email"
        {...register("email", {
          required: "Это поле не может быть пустым",
          maxLength: 100,
          minLength: 5,
        })}
      />
      <p className={styles.errortext}>
        {emailError.error && String(emailError.message)}
      </p>
      <label
        className={
          passwordError.error
            ? `${styles.label} ${styles.errortext}`
            : styles.label
        }
        htmlFor="password"
      >
        Пароль:
      </label>
      <input
        className={
          passwordError.error ? `${styles.input} ${styles.error}` : styles.input
        }
        type="password"
        placeholder="Пароль"
        {...register("password", {
          required: "Это поле не может быть пустым",
          maxLength: 100,
          minLength: 5,
        })}
      />
      <p className={styles.errortext}>
        {passwordError.error && String(passwordError.message)}
      </p>
      <button type="submit">Войти</button>
      <NavLink to={REGISTER_ROUTE}>Есть аккаунт? Войдите!</NavLink>
    </form>
  );
};

export default Login;
