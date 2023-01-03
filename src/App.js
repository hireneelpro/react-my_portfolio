import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./routes/navigation";
import MainPage from "./components/main-page";
import MyProjects from "./components/projects/my-projects";
import Contact from "./components/contact-form";
import ProjectDetails from "./components/projects/project-details";
import Skills from "./components/skills/skills";
import About from "./components/about";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<MainPage />} />
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
