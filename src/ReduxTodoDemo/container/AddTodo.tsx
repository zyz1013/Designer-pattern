import React from "react";
import { connect } from "react-redux";
import { State } from "../store/states";
import { Dispatch } from "redux";
import { addTodo } from "../store/action";
interface StateToProps {}
interface DispatchProps {
  AddTodo: (text: string) => void;
}

interface PageProps extends StateToProps, DispatchProps {}
interface PageState {}

const mapStateToProps = (state: State) => {
  return {};
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    AddTodo: (text: string) => dispatch(addTodo(text))
  };
};

class AddTodo extends React.Component<PageProps, PageState> {
  private input: HTMLInputElement | null = null;

  public hanldeAddTodo = () => {
    if (this.input) {
      const text = this.input.value;
      if (this.props.AddTodo && text !== "" && text !== undefined) {
        this.props.AddTodo(text);
        this.input.value = "";
      }
    }
  };

  public render() {
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.input = input;
          }}
        />
        <button onClick={this.hanldeAddTodo}>AddTodo</button>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
