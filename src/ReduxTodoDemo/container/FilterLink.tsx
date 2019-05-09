import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setVisiblityFilter } from "../store/action";
import { VisibilityFilter, State } from "../store/states";

interface StateToProps {
  visibilityFilter: VisibilityFilter;
}

interface DispatchToProps {
  setVisiblityFilter: (filter: VisibilityFilter) => void;
}
interface PageProps extends StateToProps, DispatchToProps {
  filter: VisibilityFilter;
}
interface PageState {}
const mapStateToProps = (state: State) => {
  return {
    visibilityFilter: state.visibilityFilter
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setVisiblityFilter: (filter: VisibilityFilter) =>
      dispatch(setVisiblityFilter(filter))
  };
};

class Link extends React.Component<PageProps, PageState> {
  public render() {
    return (
      <button
        onClick={() => this.props.setVisiblityFilter(this.props.filter)}
        disabled={this.props.visibilityFilter === this.props.filter}
      >
        {this.props.children}
      </button>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
