import styles from './Loader.module.css';

interface LoaderProps {
  size: number;
}

export default function Loader({ size }: LoaderProps) {
  return (
    <div
      className={styles.loader}
      style={{
        transform: `scale(${isNaN(size) ? 1 : size})`,
      }}
    >
      <span className={styles['capsule-1']}>&nbsp;</span>
      <span className={styles['capsule-2']}>&nbsp;</span>
      <span className={styles['capsule-3']}>&nbsp;</span>
      <span className={styles['capsule-4']}>&nbsp;</span>
      <span className={styles['capsule-5']}>&nbsp;</span>
      <span className={styles['capsule-6']}>&nbsp;</span>
      <span className={styles['capsule-7']}>&nbsp;</span>
      <span className={styles['capsule-8']}>&nbsp;</span>
    </div>
  );
}
