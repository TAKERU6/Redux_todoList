import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTask } from "../actions";

class Task extends Component {
  render() {
    const { todo, handleDelete } = this.props;
    return (
      <>
        <li>{todo.text}</li>
        <button onClick={() => handleDelete(todo.id)}>delete</button>
        <button>edit</button>
        <button>done</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ todos: state.todos });

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => dispatch(deleteTask(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
