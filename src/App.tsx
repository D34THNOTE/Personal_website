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

function App() {
  return (
      <Router>
        <div>
          <Navigation  />
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
