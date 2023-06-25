import styles from './FormTodo.module.css';

import { Button } from "../Button";
import { Input } from "../Input";

export function FormTodo() {
  return (
    <div className={styles.formTodo}>
      <Input placeholder='Adicione uma nova tarefa' />
      <Button />
    </div>
  );
}