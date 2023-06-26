import Check from '../../assets/Check.svg';

import styles from './Checkbox.module.css';

export function Checkbox() {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" />
      <span className={styles.checkmark}>
        <img src={Check} />
      </span>
    </label>
  );
}