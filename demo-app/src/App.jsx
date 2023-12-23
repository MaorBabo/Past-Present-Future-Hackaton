import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./Pages/FirstPage";
import HomePage from "./Pages/HomePage";
import PersonalArea from "./Pages/PersonalArea";

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<FirstPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/PersonalArea" element={<PersonalArea />} />
      </Routes>
    </Router>
  );
};

export default App;
