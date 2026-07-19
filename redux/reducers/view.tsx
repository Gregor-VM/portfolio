import actionTypes from "../actionTypes";
import type Project from "../../interfaces/Project";
import type viewActions from "../actions/viewActions";

interface ViewState {
  view: boolean;
  project: Project | null;
}

type ViewAction =
  | ReturnType<typeof viewActions.setView>
  | ReturnType<typeof viewActions.setProject>;

const initialState: ViewState = {
  view: false,
  project: null,
};

const reducer = (state = initialState, action: ViewAction): ViewState => {
  switch (action.type) {
    case actionTypes.SETVIEW:
      return { ...state, view: action.payload };
    case actionTypes.SETPROJECT:
      return { ...state, project: action.payload };
    default:
      return state;
  }
};

export default reducer;
