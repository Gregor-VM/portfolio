import actionTypes from "../actionTypes";
import type { User } from "../../interfaces/User";
import type userActions from "../actions/userActions";

interface UserState {
  user: User | null;
}

type UserAction = ReturnType<typeof userActions.setUser>;

const initialState: UserState = {
  user: null,
};

const reducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case actionTypes.SETUSER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
