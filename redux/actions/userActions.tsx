import actionTypes from "../actionTypes";

const actions = {
  setUser: (user) => {
    return { type: actionTypes.SETUSER, payload: user };
  },
};

export default actions;
