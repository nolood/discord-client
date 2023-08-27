import { CHANNEL_ROUTE, REGISTER_ROUTE } from '@/consts/PathsRoutes';
import { selectIsAuth, selectLogin } from '@/store/userStore/userSelectors';
import { useUserStore } from '@/store/userStore/userStore';
import { IFormLogin } from '@/types/IFormLogin';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const isAuth = useUserStore(selectIsAuth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLogin>();

  const emailError = {
    error: !!errors?.email,
    message: errors?.email?.message || 'Некорректная длина',
  };

  const passwordError = {
    error: !!errors?.password,
    message: errors?.password?.message || 'Некорректная длина',
  };

  const login = useUserStore(selectLogin);
  const onSubmit: SubmitHandler<IFormLogin> = async (data) => {
    await login(data);
    if (isAuth) {
      navigate(CHANNEL_ROUTE);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1>Авторизация</h1>
      <label
        className={emailError.error ? `${styles.label} ${styles.errortext}` : styles.label}
        htmlFor='email'
      >
        Email:
      </label>
      <input
        className={emailError.error ? `${styles.input} ${styles.error}` : styles.input}
        type='text'
        placeholder='Email'
        {...register('email', {
          required: 'Это поле не может быть пустым',
          maxLength: 100,
          minLength: 5,
        })}
      />
      <p className={styles.errortext}>{emailError.error && String(emailError.message)}</p>
      <label
        className={passwordError.error ? `${styles.label} ${styles.errortext}` : styles.label}
        htmlFor='password'
      >
        Пароль:
      </label>
      <input
        className={passwordError.error ? `${styles.input} ${styles.error}` : styles.input}
        type='password'
        placeholder='Пароль'
        {...register('password', {
          required: 'Это поле не может быть пустым',
          maxLength: 100,
          minLength: 5,
        })}
      />
      <p className={styles.errortext}>{passwordError.error && String(passwordError.message)}</p>
      <button type='submit'>Войти</button>
      <NavLink to={REGISTER_ROUTE}>Есть аккаунт? Войдите!</NavLink>
    </form>
  );
};

export default Login;
