import Clipboard from '../../assets/Clipboard.svg';
import styles from './TodoEmpty.module.css';

export function TodoEmpty() {
  return (
    <div className={styles.empty}>
      <span className={styles.icon}>
        <img src={Clipboard} />
      </span>
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}