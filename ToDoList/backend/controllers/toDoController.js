import Todo from "../models/toDo.js";

export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

export const createTodo = async (req, res) => {
  const todo = await Todo.create({
    title: req.body.title
  });
  res.status(201).json(tAodo);
};

export const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
};
