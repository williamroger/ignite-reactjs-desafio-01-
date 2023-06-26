import styles from './TodoHeader.module.css';

interface TodoHeaderProps {
  totalTodos: number;
  todosFinished: number;
}

export function TodoHeader({ totalTodos, todosFinished } : TodoHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.todoCounter}>
        <h2>Tarefas Criadas</h2>
        <span>
          <p>{totalTodos}</p>
        </span>
      </div>
      <div className={styles.todoCounter}>
        <h2>Concluídas</h2>
        <span>
          <p>{todosFinished}</p>
        </span>
      </div>
    </div>
  );
}