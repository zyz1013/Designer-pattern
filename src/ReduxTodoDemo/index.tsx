import React from "react";
import AddTodo from "./container/AddTodo";
import TodoList from "./container/TodoList";
import Footer from "./container/Footer";

class ReduxTodoDemo extends React.Component {
  render() {
    return (
      <div className="TodoWrapper">
        <div>React-Redux</div>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default ReduxTodoDemo;
