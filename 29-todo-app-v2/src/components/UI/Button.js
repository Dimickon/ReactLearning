import styles from './Button.module.css';
console.log(styles);

export default function Button(props) {
  const { children, disabled = false } = props;
  return (
    <button {...props} className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
}
