import { useEffect, useState } from "react";
import { fetchTodos, addTodo, deleteTodo } from "../api";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "./Todo.css";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-wrapper">
      <div className="app-shell">
        <header className="header">
          <h1>Todo</h1>
          <p>{todos.length} tasks</p>
        </header>

        <AddTodo onAdd={handleAdd} />

        <input
          className="search"
          placeholder="Search tasks"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <TodoList
          todos={filteredTodos}
          loading={loading}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
