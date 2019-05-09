import React from "react";

interface Pageprops {
  text: string;
  completed: boolean;
  id: number;
  onClick: () => void;
}
interface PageState {}
class Todo extends React.PureComponent<Pageprops, PageState> {
  public render() {
    return (
      <div
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? "line-through" : "none"
        }}
      >
        {this.props.text}
      </div>
    );
  }
}

export default Todo;
