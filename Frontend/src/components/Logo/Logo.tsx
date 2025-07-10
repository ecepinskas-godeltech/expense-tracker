import LogoSvg from '../../assets/Logo.svg';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <img
      className={styles.logo}
      src={LogoSvg}
      alt="Logo"
      aria-label="YAET Logo"
    />
  );
}
