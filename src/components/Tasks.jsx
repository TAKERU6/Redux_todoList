import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const Tasks = ({ todos }) => (
  <span className="todo-list">
    {todos.map((todo) => (
      <Task key={todo.id} todo={todo} />
    ))}
  </span>
);

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Tasks);
