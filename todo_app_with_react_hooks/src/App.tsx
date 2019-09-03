import React, { useState } from 'react';
import './App.css'; 

function Todo({ todo, index, completeTodo, removeTodo }: any) {
  return (
    <div 
      className="todo"
      style={{textDecoration: todo.isCompleted ? 'line-through': ''}}
      key={index}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
}

function TodoForm({addTodo}: any) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      text: 'Meet frind for lunch',
      isCompleted: false,
    },
    {
      text: 'build really cool todo app',
      isCompleted: false,
    },
  ]);

  const addTodo = (text:any='', isCompleted: boolean) => {
    const newTodos = [...todos, { text, isCompleted }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;