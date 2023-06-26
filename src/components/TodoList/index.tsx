import styles from './TodoList.module.css';

import { Todo } from '../../App';
import { TodoEmpty } from '../TodoEmpty';
import { TodoItem } from '../TodoItem';
import { TodoHeader } from '../TodoHeader';
import { Dispatch, SetStateAction } from 'react';

interface TodoListProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[] | []>>;
}

export function TodoList({ todos, setTodos }: TodoListProps) {
  const totalTodos = todos.length;
  const todosFinished  = todos.filter(todo => todo.isFinished).length;

  function handleToggleFinishTodo(todoToFinish: Todo) {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoToFinish.id) {
        return { ...todo, isFinished: !todo.isFinished }
      }
      return todo;
    });
    
    setTodos(newTodos);
  }

  function handleRemoveTodo(todoToRemove: Todo) {
    const todosFiltered = todos.filter((todo) => todo.id !== todoToRemove.id);
    
    setTodos(todosFiltered);
  }

  return (
    <div className={styles.todoList}>
      <TodoHeader totalTodos={totalTodos} todosFinished={todosFinished} />
      <div className={styles.content}>
        {todos.length ? 
          todos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              finishTodo={handleToggleFinishTodo}
              removeTodo={handleRemoveTodo} />
          ))
          : <TodoEmpty />
        }
      </div>
    </div>
  )
}