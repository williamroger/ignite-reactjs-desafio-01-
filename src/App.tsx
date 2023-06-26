import { useState } from 'react';

import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header'
import { FormTodo } from './components/FormTodo';
import { TodoList } from './components/TodoList';

export interface Todo {
  id: string;
  text: string;
  isFinished: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <Header />
      <div className={styles.content}>
        <FormTodo setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default App
