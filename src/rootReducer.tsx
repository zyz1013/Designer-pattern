import { combineReducers } from "redux";
import visibilityFilter from "./ReduxTodoDemo/store/reducer/filter";
import todoList from "./ReduxTodoDemo/store/reducer/todoList";

export const rootReducers = combineReducers({
  todoList,
  visibilityFilter
});
