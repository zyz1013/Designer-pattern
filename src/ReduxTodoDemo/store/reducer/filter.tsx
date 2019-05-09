import { VisibilityFilter } from "../states/";
import { SET_VISIBILITY_FILTER } from "../actionTypes";

export default (state: VisibilityFilter = "SHOW_ALL", action: any) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
};
