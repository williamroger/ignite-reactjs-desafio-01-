import { InputHTMLAttributes } from 'react';
import Check from '../../assets/Check.svg';

import styles from './Checkbox.module.css';

// interface CheckboxProps extends InputHTMLAttributes{

// }

export function Checkbox({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" {...props} />
      <span className={styles.checkmark}>
        <img src={Check} />
      </span>
    </label>
  );
}