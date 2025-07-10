import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  aria: string;
  disabled: boolean;
  type: string;
  onClick: () => void;
}

export default function Button({
  text,
  aria,
  disabled,
  type,
  onClick,
}: ButtonProps) {
  return (
    <button
      aria-label={aria}
      disabled={disabled}
      className={styles[`button-${type}`]}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
