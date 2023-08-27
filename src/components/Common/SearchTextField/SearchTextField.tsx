import styles from './SearchTextField.module.scss';

const SearchTextField = ({
  className,
  placeholder,
  value,
  setValue,
}: {
  className?: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`${className ? className : ''} ${styles.input}`}
    />
  );
};

export default SearchTextField;
