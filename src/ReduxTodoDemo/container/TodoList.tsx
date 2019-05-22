import React from "react";
import Todo from "../component/Todo";
import { State, TodoDto, VisibilityFilter } from "../store/states/";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleTodo } from "../store/action";

interface StateToProps {
  todoList: TodoDto[];
}

interface DispatchToProps {
  toggleTodo: (id: number) => void;
}
interface PageProps extends StateToProps, DispatchToProps {}
interface PageState {
  todoList: TodoDto[];
}
const mapStateToProps = (state: State) => {
  return {
    todoList: getVisibleTodos(state.todoList, state.visibilityFilter)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleTodo: (id: number) => dispatch(toggleTodo(id))
  };
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
class TodoList extends React.Component<PageProps, PageState> {
  public handleToggleTodo(id: number) {
    if (this.props.toggleTodo) {
      this.props.toggleTodo(id);
    }
  }
  public render() {
    return (
      <div className="todo-list">
        {this.props.todoList.map(todo => {
          return (
            <Todo
              key={todo.id}
              onClick={() => this.handleToggleTodo(todo.id)}
              {...todo}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
