import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import React from 'react';
import './App.css';
import Footer from "./components/fragments/footer";
import Navigation from "./components/fragments/navigation";
import MainContent from "./components/MainContent";
import SkillsAndProjects from "./components/SkillsAndProjects";
import Contact from "./components/Contact";

function App() {
  return (
      <Router>
        <div>
          <Navigation  />
          <Routes>
            <Route path="/About" element={<MainContent />} />
            <Route path="/SkillsAndProjects" element={<SkillsAndProjects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
