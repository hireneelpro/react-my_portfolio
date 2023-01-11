import { createSelector } from "reselect";

export const projectsReducerState = state => state.projects
export  const selectProjects = createSelector(
    [projectsReducerState],
    (projects)=>projects.projects
    
)