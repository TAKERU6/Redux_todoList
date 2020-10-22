import React from "react";
import Task from "./Task";

const Tasks = ({ todos }) => (
  <span className="todo-list">
    {todos.map((todo) => (
      <Task key={todo.id} todo={todo} />
    ))}
  </span>
);

export default Tasks;
