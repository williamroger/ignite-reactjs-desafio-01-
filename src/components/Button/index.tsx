import IconPlus from '../../assets/Plus.svg';
import styles from './Button.module.css';

export function Button() {
  return (
    <button className={styles.button}>
      Criar
      <img src={IconPlus} className={styles.icon} />
    </button>
  )
}