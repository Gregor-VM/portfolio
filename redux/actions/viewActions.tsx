import actionTypes from "../actionTypes";

const actions = {
  setView: (bool: boolean) => {
    return { type: actionTypes.SETVIEW, payload: bool };
  },
  setProject: (project) => {
    return { type: actionTypes.SETPROJECT, payload: project };
  },
};

export default actions;
