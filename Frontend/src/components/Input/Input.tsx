import { useState } from 'react';
import styles from './Input.module.css';
import stylesInputLabel from '../InputLabel/InputLabel.module.css';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  aria: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  helperText?: string;
  helperTextType?: string;
  errorMessage?: string;
}

export default function Input({
  type,
  name,
  placeholder,
  aria,
  defaultValue = '',
  onChange,
  helperText,
  helperTextType,
  errorMessage,
}: InputProps) {
  const [input, setInput] = useState(defaultValue);

  return (
    <div className="flex-column">
      <span className={stylesInputLabel[`${helperTextType}`]}>
        {helperText}
      </span>
      <input
        name={name}
        type={type}
        aria-label={aria}
        placeholder={placeholder}
        value={input}
        onChange={(event) => {
          if (onChange) onChange(event.target.value);
          setInput(event.target.value);
        }}
        className={styles.input}
      ></input>
      {input === '' && errorMessage ? (
        <div className={styles.warning}>{errorMessage}</div>
      ) : null}
    </div>
  );
}
