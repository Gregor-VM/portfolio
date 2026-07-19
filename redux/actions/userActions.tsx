import actionTypes from "../actionTypes";
import type { User } from "../../interfaces/User";

const actions = {
  setUser: (user: User | null) => {
    return { type: actionTypes.SETUSER, payload: user } as const;
  },
};

export default actions;
