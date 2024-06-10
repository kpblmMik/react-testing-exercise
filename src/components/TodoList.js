import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { addTodo } from '../functions/addTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    const newTodo = { text: input };
    setTodos(addTodo(todos, newTodo));
    setInput('');
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        // console.log('Response:', data);
        const formattedTodos = data.map(todo => ({ text: todo.title, completed: todo.completed }));
        // console.log('Formatted Todos:', formattedTodos);
        setTodos(formattedTodos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;