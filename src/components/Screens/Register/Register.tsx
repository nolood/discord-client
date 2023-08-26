import { LOGIN_ROUTE } from '@/consts/PathsRoutes'
import { useUserStore } from '@/store/userStore'
import { selectRegUser } from '@/store/userStore/userSelectors'
import { IFormRegister } from '@/types/IFormRegister'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import styles from './Register.module.scss'

const Register = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormRegister>()

	const nicknameError = {
		error: !!errors?.nickname,
		message: errors?.nickname?.message || 'Некорректная длина',
	}

	const emailError = {
		error: !!errors?.email,
		message: errors?.email?.message || 'Некорректная длина',
	}

	const passwordError = {
		error: !!errors?.password,
		message: errors?.password?.message || 'Некорректная длина',
	}

	const passrepeatError = {
		error: !!errors?.passrepeat,
		message: errors?.passrepeat?.message || 'Некорректная длина',
	}

	const registerUser = useUserStore(selectRegUser)
	const onSubmit: SubmitHandler<IFormRegister> = data => {
		if (data.password === data.passrepeat) {
			registerUser({
				password: data.password,
				nickname: data.nickname,
				email: data.email,
			})
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<h1>Регистрация</h1>
			<label
				className={
					nicknameError.error
						? `${styles.label} ${styles.errortext}`
						: styles.label
				}
				htmlFor='nickname'
			>
				Ник:
			</label>
			<input
				className={
					nicknameError.error ? `${styles.input} ${styles.error}` : styles.input
				}
				type='text'
				{...register('nickname', {
					required: 'Это поле не может быть пустым',
					minLength: 3,
					maxLength: 16,
				})}
			/>
			<p className={styles.errortext}>
				{nicknameError.error && String(nicknameError.message)}
			</p>

			<label
				className={
					emailError.error
						? `${styles.label} ${styles.errortext}`
						: styles.label
				}
				htmlFor='email'
			>
				Email:
			</label>
			<input
				className={
					emailError.error ? `${styles.input} ${styles.error}` : styles.input
				}
				type='text'
				{...register('email', {
					required: 'Это поле не может быть пустым',
					minLength: 5,
					maxLength: 50,
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
				htmlFor='password'
			>
				Пароль:
			</label>
			<input
				className={
					passwordError.error ? `${styles.input} ${styles.error}` : styles.input
				}
				type='text'
				{...register('password', {
					required: 'Это поле не может быть пустым',
					minLength: 6,
					maxLength: 20,
				})}
			/>
			<p className={styles.errortext}>
				{passwordError.error && String(passwordError.message)}
			</p>

			<label
				className={
					passrepeatError.error
						? `${styles.label} ${styles.errortext}`
						: styles.label
				}
				htmlFor='passrepeat'
			>
				Повтор пароля:
			</label>
			<input
				className={
					passrepeatError.error
						? `${styles.input} ${styles.error}`
						: styles.input
				}
				type='text'
				{...register('passrepeat', {
					required: 'Это поле не может быть пустым',
					minLength: 3,
					maxLength: 16,
				})}
			/>
			<p className={styles.errortext}>
				{passrepeatError.error && String(passrepeatError.message)}
			</p>
			<button type='submit'>Войти</button>
			<NavLink to={LOGIN_ROUTE}>Есть аккаунт? Войдите!</NavLink>
		</form>
	)
}

export default Register
