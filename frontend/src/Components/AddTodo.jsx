import { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");

  const submitHandler = () => {
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={submitHandler}>Add</button>
    </div>
  );
}
