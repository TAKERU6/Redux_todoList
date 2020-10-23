export const ADD_TASKS = "ADD_TASKS";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const CHANGE_TASK = "CHANGE_TASK";
export const DONE_TASK = "DONE_TASK";

let id = 0;
const createdAt = new Date().toLocaleDateString();
export const addTasks = (text) => {
  return {
    type: ADD_TASKS,
    id: id++,
    text,
    createdAt: createdAt
  };
};

export const deleteTask = (id) => ({ type: DELETE_TASK, id });

export const editTask = (id, isEdit) => ({ type: EDIT_TASK, id, isEdit });

export const changeTask = (id, text) => ({ type: CHANGE_TASK, id, text });

export const doneTask = (id, isDone) => ({ type: DONE_TASK, id, isDone });
