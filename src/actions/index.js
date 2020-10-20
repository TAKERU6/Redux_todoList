export const ADD_TASKS = "ADD_TASKS";
export const DELETE_TASK = "DELETE_TASK";

let id = 0;
export const addTasks = (text) => {
  return {
    type: ADD_TASKS,
    id: id++,
    text
  };
};

export const deleteTask = (id) => ({ type: DELETE_TASK, id });
