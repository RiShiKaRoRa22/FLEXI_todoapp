import { useEffect, useState } from "react";
import { fetchTodos, addTodo, deleteTodo } from "../api";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "./Todo.css";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos()
      .then(res => setTodos(res.data))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = async (title) => {
    const res = await addTodo(title);
    setTodos([res.data, ...todos]);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="page">
      <div className="container">
        <h1>Todo</h1>

        <AddTodo onAdd={handleAdd} />

        <TodoList
          todos={todos}
          loading={loading}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
