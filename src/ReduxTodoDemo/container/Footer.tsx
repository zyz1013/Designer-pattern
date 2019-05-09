import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../store/actionTypes";
import { VisibilityFilter, State, TodoDto } from "../store/states";
import FilterLink from "./FilterLink";

interface StateToProps {
  todoList: TodoDto[];
}

interface DispatchToProps {}
interface PageProps extends StateToProps, DispatchToProps {}
interface PageState {}
const mapStateToProps = (state: State) => {
  return {
    todoList: getVisibleTodos(state.todoList, state.visibilityFilter)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};
const getVisibleTodos = (
  todos: TodoDto[],
  visibilityFilter: VisibilityFilter
) => {
  switch (visibilityFilter) {
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    case "SHOW_ALL":
    default:
      return todos;
  }
};
class Footer extends React.Component<PageProps, PageState> {
  public render() {
    return (
      <div className="todo-footer">
        <span>数量:{this.props.todoList.length}</span>
        <FilterLink filter={SHOW_ALL}>All</FilterLink>
        <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
