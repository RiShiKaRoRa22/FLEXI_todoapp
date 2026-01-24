export default function TodoItem({ todo, onDelete }) {
  return (
    <div className="todo-item">
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo._id)}>
        Delete
      </button>
    </div>
  );
}
