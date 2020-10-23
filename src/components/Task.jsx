import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTask, editTask, changeTask, doneTask } from "../actions";

class Task extends Component {
  state = { editText: "" };

  handleEditChange = (event) => this.setState({ editText: event.target.value });

  onEditSubmit = (e) => {
    e.preventDefault();
    this.setState({ editText: "" });
  };

  render() {
    const {
      todo,
      handleDelete,
      onClickEdit,
      handleEditSubmit,
      onClickDone
    } = this.props;
    const isEdit = !!todo.isEdit;
    const isDone = !!todo.done;
    return (
      <>
        <div>
          <span>{todo.text}</span>
          <span></span>
        </div>
        <button
          onClick={() => {
            if (window.confirm("Are you sure?")) {
              return handleDelete(todo.id);
            }
          }}
        >
          delete
        </button>
        <button onClick={() => onClickEdit(todo.id, isEdit)}>edit</button>
        <button onClick={() => onClickDone(todo.id, isDone)}>
          {isDone ? "done" : "no done"}
        </button>
        {isEdit && (
          <>
            <form
              onSubmit={(e) => {
                const text = this.state.editText;
                handleEditSubmit(todo.id, text);
                this.onEditSubmit(e);
              }}
            >
              <input
                type="text"
                value={this.state.editText}
                onChange={this.handleEditChange}
              ></input>
              <input type="submit" value="change"></input>
            </form>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({ todos: state.todos });

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => dispatch(deleteTask(id)),
    onClickEdit: (id, isEdit) => dispatch(editTask(id, isEdit)),
    handleEditSubmit: (id, text) => dispatch(changeTask(id, text)),
    onClickDone: (id, isDone) => dispatch(doneTask(id, isDone))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
