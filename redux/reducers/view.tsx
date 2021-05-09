import actionTypes from "../actionTypes";

const initialState = {
  view: false,
  project: {},
};

const reducer = function (
  state = initialState,
  { type, payload }: { type: string; payload: boolean }
) {
  switch (type) {
    case actionTypes.SETVIEW:
      return { ...state, view: payload };
    case actionTypes.SETPROJECT:
      return { ...state, project: payload };
    default:
      return state;
  }
};

export default reducer;
