import styles from './Input.module.css';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input({ ...props }: InputProps) {
  return (
    <input type="text" className={styles.input} {...props}/>
  );
}