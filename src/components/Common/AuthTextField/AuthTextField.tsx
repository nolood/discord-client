import styles from "./AuthTextField.module.scss";

const AuthTextField = ({
  placeholder,
  id,
  type,
  value,
  setValue,
}: {
  placeholder: string;
  id?: string;
  type?: string;
  value: string;
  setValue: (value: string) => void;
}) => {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={styles.input}
      type={type ? type : "text"}
      placeholder={placeholder}
      id={id}
    />
  );
};

export default AuthTextField;
