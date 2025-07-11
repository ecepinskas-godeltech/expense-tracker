import styles from './InputLabel.module.css';

interface InputLabelProps {
  text: string;
  htmlFor: string;
  type: string;
}

export default function InputLabel({ text, htmlFor, type }: InputLabelProps) {
  return (
    <label htmlFor={htmlFor} className={styles[`${type}`]}>
      {text}
    </label>
  );
}
