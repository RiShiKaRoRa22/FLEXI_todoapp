import TodoItem from "./TodoItem";

export default function TodoList({ todos, loading, onDelete }) {
  if (loading) return <div className="status">Loading...</div>;

  if (todos.length === 0)
    return <div className="status">No tasks found</div>;

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
