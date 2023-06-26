import { Todo } from "../../App";
import { ButtonTrash } from "../ButtonTrash";
import { Checkbox } from "../Checkbox";

import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  finishTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
}

export function TodoItem({ todo, finishTodo, removeTodo }: TodoItemProps) {
  return (
    <div className={styles.todoItem}>
      <Checkbox onChange={() => finishTodo(todo) }/>
      <span className={styles.text}>
        <p className={todo.isFinished ? styles.isFinished : ''}>{todo.text}</p>
      </span>
      <ButtonTrash onClick={() => removeTodo(todo)}/>
    </div>
  );
}