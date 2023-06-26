import styles from './TodoList.module.css';
import Clipboard from '../../assets/Clipboard.svg';
import { ButtonTrash } from '../ButtonTrash';
import { Checkbox } from '../Checkbox';

export function TodoList() {
  return (
    <div className={styles.todoList}>
      <div className={styles.header}>
        <div className={styles.todoCounter}>
          <h2>Tarefas Criadas</h2>
          <span>
            <p>0</p>
          </span>
        </div>
        <div className={styles.todoCounter}>
          <h2>Concluídas</h2>
          <span>
            <p>0</p>
          </span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.empty}>
          <span className={styles.icon}>
            <img src={Clipboard} />
          </span>
          <h2>Você ainda não tem tarefas cadastradas</h2>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        <div className={styles.todoItem}>
          <Checkbox />
          <span className={styles.text}>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. 
              Duis vel sed fames integer.</p>
          </span>
          <ButtonTrash />
        </div>
      </div>
    </div>
  )
}