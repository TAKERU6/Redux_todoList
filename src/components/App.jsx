import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./Form";
import Tasks from "./Tasks";
import "../styles.css";

class App extends Component {
  state = { taskStatus: { all: true, done: false, notDone: false } };

  onClick = (e, status) => {
    e.preventDefault();
    switch (status) {
      case "all":
        this.setState({
          taskStatus: { all: true, done: false, notDone: false }
        });
        break;
      case "done":
        this.setState({
          taskStatus: { all: false, done: true, notDone: false }
        });
        break;
      case "notDone":
        this.setState({
          taskStatus: { all: false, done: false, notDone: true }
        });
        break;
      default:
    }
  };

  handleTaskSort = () => {
    const { taskStatus } = this.state;
    const { todos } = this.props;
    if (taskStatus.all) return todos;
    if (taskStatus.done) return todos.filter((item) => item.done === true);
    if (taskStatus.notDone) return todos.filter((item) => item.done === false);
  };

  render() {
    const renderTodos = this.handleTaskSort();
    return (
      <div>
        <Form />
        <button onClick={(e) => this.onClick(e, "all")}>all</button>
        <button onClick={(e) => this.onClick(e, "done")}>done</button>
        <button onClick={(e) => this.onClick(e, "notDone")}>no done</button>
        <Tasks todos={renderTodos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ todos: state.todos });

export default connect(mapStateToProps)(App);
