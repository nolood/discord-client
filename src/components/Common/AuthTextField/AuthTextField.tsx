import styles from "./AuthTextField.module.scss";
import { type UseFormRegister, type FieldValues } from "react-hook-form";

const AuthTextField = ({
  placeholder,
  id,
  type,
  register,
  options,
}: {
  placeholder: string;
  id: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  options: { maxLength?: number; minLength?: number; required?: string };
}) => {
  return (
    <input
      className={styles.input}
      type={type ? type : "text"}
      placeholder={placeholder}
      id={id}
      {...register(id, { ...options })}
    />
  );
};

export default AuthTextField;
