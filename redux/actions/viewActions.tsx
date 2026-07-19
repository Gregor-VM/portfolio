import actionTypes from "../actionTypes";
import type Project from "../../interfaces/Project";

const actions = {
  setView: (bool: boolean) => {
    return { type: actionTypes.SETVIEW, payload: bool } as const;
  },
  setProject: (project: Project) => {
    return { type: actionTypes.SETPROJECT, payload: project } as const;
  },
};

export default actions;
