import {
  ADD_TASKS,
  DELETE_TASK,
  EDIT_TASK,
  CHANGE_TASK,
  DONE_TASK
} from "../actions";

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASKS:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isEdit: false,
          done: false,
          createdAt: action.createdAt
        }
      ];
    case DELETE_TASK:
      return state.filter((item) => item.id !== action.id);
    case EDIT_TASK:
      const newTasks = state.filter((item) => item.id !== action.id);
      const task = state.find((item) => item.id === action.id);
      return [
        ...newTasks,
        {
          ...task,
          isEdit: !action.isEdit
        }
      ];
    case CHANGE_TASK:
      const anotherTasks = state.filter((item) => item.id !== action.id);
      const selectedTask = state.find((item) => item.id === action.id);
      return [
        ...anotherTasks,
        {
          ...selectedTask,
          text: action.text,
          isEdit: false
        }
      ];
    case DONE_TASK:
      const notDoneTasks = state.filter((item) => item.id !== action.id);
      const doneTasks = state.find((item) => item.id === action.id);
      return [
        ...notDoneTasks,
        {
          ...doneTasks,
          done: !action.isDone
        }
      ];
    default:
      return state;
  }
};

export default todos;
