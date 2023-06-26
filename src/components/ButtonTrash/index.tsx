import Trash from '../../assets/Trash.svg';

import styles from './ButtonTrash.module.css';

export function ButtonTrash() {
  return (
    <button className={styles.button}>
      <img src={Trash} />
    </button>
  );
}