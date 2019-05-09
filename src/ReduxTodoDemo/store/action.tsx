import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./actionTypes";
import { VisibilityFilter } from "./states";

let id = 0;
export const addTodo = (text: string) => {
  return {
    type: ADD_TODO,
    payload: {
      text,
      id: id++,
      completed: false
    }
  };
};
export const toggleTodo = (id: number) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  };
};

export const setVisiblityFilter = (visibilityFilter: VisibilityFilter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: visibilityFilter
  };
};
