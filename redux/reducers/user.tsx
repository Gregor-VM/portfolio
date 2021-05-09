import actionTypes from "../actionTypes";

const initialState = {
  user: {},
};

const reducer = function (
  state = initialState,
  { type, payload }: { type: string; payload: boolean }
) {
  switch (type) {
    case actionTypes.SETUSER:
      return { ...state, user: payload };
    default:
      return state;
  }
};

export default reducer;
