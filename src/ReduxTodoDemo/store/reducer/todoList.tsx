import { TodoDto } from "../states/index";
import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

export default (state: TodoDto[] = [], action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
};
