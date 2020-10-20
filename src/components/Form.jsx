import React, { Component } from "react";
import { connect } from "react-redux";
import { addTasks } from "../actions";

class Form extends Component {
  state = {
    text: ""
  };

  handleChange = (event) => this.setState({ text: event.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ text: "" });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = this.state.text;
          handleSubmit(text);
          this.onSubmit(e);
        }}
      >
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        ></input>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (text) => dispatch(addTasks(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
