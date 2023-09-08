import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies" element={<Home type="movies" />} />
        <Route exact path="/series" element={<Home type="series" />} />
        <Route exact path="/watch" element={<Watch />} />

      </Routes>
    </Router>
  );
};

export default App;