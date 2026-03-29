import styles from './Info.module.css';

console.log(styles);

export default function Info() {
  return (
    <div className={styles.info}>
      <h1 className={styles.info__heading}>Hello</h1>
      <button className={styles.myOtherButton}>Click me</button>
    </div>
  );
}
