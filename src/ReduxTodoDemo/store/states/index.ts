import { SHOW_ALL } from "../actionTypes";

export interface TodoDto {
  text: string;
  id: number;
  completed: boolean;
}
export interface VisibilityFilterList {
  SHOW_ALL: string;
  SHOW_ACTIVE: string;
  SHOW_COMPLETED: string;
}

export type VisibilityFilter = keyof VisibilityFilterList;

export interface State {
  todoList: TodoDto[];
  visibilityFilter: VisibilityFilter;
}

export const state: State = {
  todoList: [],
  visibilityFilter: SHOW_ALL
};
