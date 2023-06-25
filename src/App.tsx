import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header'
import { FormTodo } from './components/FormTodo';
import { TodoList } from './components/TodoList';


function App() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <FormTodo />
        <TodoList />
      </div>
    </>
  )
}

export default App
