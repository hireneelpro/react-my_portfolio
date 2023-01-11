import { combineReducers } from "redux"
import { projectsReducer } from "./projects/projects-reducer"
export const rootReducer = combineReducers({
    // user: userReducer,
    projects: projectsReducer
})