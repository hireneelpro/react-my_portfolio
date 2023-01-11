import { PROJECTS_TYPES } from "./projects-.types";
export const INITIAL_STATE = {
  isLoading: false,
  projects: [],
  error: undefined,
};

export const projectsReducer = (state = INITIAL_STATE, action) => {
  const { type, payLoad } = action;

  switch (type) {
    case PROJECTS_TYPES.FETCH_PROJECTS_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PROJECTS_TYPES.FETCH_PROJECTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        projects: payLoad,
      };
    }
    case PROJECTS_TYPES.FETCH_PROJECTS_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: payLoad,
      };
    }
    default: {
      return state;
    }
  }
};
