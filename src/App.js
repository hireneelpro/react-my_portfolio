import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./routes/navigation";
import HomePage from "./components/home-page";
import MyProjects from "./components/projects/my-projects";
import Contact from "./components/contact-form";
import ProjectDetails from "./components/projects/project-details";
import Skills from "./components/skills/skills";
import About from "./components/about";
import { projectData } from "./assets/data";
import { storeCollectionAndDocuments } from "./utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getCollectionAndDocuments } from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import {
 FETCHING_PROJECTS_ASYNC
} from "./redux-store/projects/projects-action";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // storeCollectionAndDocuments("all-projects", projectData);
  dispatch(FETCHING_PROJECTS_ASYNC())
    
    
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/project" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
