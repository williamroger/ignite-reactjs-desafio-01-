import { ButtonHTMLAttributes } from 'react';
import Trash from '../../assets/Trash.svg';

import styles from './ButtonTrash.module.css';

export function ButtonTrash({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.button} {...props} >
      <img src={Trash} />
    </button>
  );
}