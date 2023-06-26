import { useState, ChangeEvent, InvalidEvent, FormEvent, Dispatch, SetStateAction } from 'react';

import styles from './FormTodo.module.css';

import { Button } from "../Button";
import { Input } from "../Input";
import { Todo } from '../../App';

interface FormTodoProps {
  setTodos: Dispatch<SetStateAction<Todo[] | []>>;
}

export function FormTodo({ setTodos }: FormTodoProps) {
  const [newTodo, setNewTodo] = useState('');
 
  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity(''); 
    setNewTodo(event.target.value);
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!');
  }

  function uuid() {
    return Math.random().toString(16).slice(2);
  }

 function handleCreateNewTodo(event: FormEvent) {
  event.preventDefault();

  const todo: Todo = {
    id: uuid(),
    text: newTodo,
    isFinished: false,
  };

  setTodos((todos: Todo[]) => [...todos, todo]);
  setNewTodo('');
 }

  return (
    <form className={styles.formTodo} onSubmit={handleCreateNewTodo} >
      <Input 
        placeholder='Adicione uma nova tarefa' 
        value={newTodo}
        onChange={handleNewTodoChange}
        onInvalid={handleNewTodoInvalid}
        required
      />
      <Button />
    </form>
  );
}