import { ADD_TASKS, DELETE_TASK } from "../actions";

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASKS:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    case DELETE_TASK:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default todos;
