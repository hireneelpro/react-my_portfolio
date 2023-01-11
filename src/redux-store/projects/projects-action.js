import { PROJECTS_TYPES } from "./projects-.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

export const FETCHING_PROJECTS_START = () =>
  createAction(PROJECTS_TYPES.FETCH_PROJECTS_START);
export const FETCHING_PROJECTS_SUCCESS = (payload) =>
  createAction(PROJECTS_TYPES.FETCH_PROJECTS_SUCCESS, payload);
export const FETCHING_PROJECTS_FAILED = (payload) =>
  createAction(PROJECTS_TYPES.FETCH_PROJECTS_FAILED, payload);

// === because of thunk we can write this code here else it has to be inside a component.==//

export const FETCHING_PROJECTS_ASYNC = () => async (dispatch) => {
//   ================================SEE ABOVE CODE FUNCTION RETURN IN FUNCTION =========//
  
    dispatch(FETCHING_PROJECTS_START());
  try {
    const projectsData = await getCollectionAndDocuments("all-projects");
    console.log(projectsData);
    dispatch(FETCHING_PROJECTS_SUCCESS(projectsData));
  } catch (error) {
    dispatch(FETCHING_PROJECTS_FAILED(error));
  }
};
