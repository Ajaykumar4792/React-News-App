import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Health from "./Components/Health";
import Sport from "./Components/Sport";
import Technology from "./Components/Technology";
import Science from "./Components/Science";
import Business from "./Components/Business";

const App = () => {
  return (
    <Router>
      <div className="nav">
        <ul>
          <Link className="link" to="/Home">
            {" "}
            Home{" "}
          </Link>{" "}
          <Link className="link" to="/Health">
            {" "}
            Health{" "}
          </Link>{" "}
          <Link className="link" to="/Sport">
            {" "}
            Sport{" "}
          </Link>{" "}
          <Link className="link" to="/Technology">
            {" "}
            Technology{" "}
          </Link>{" "}
          <Link className="link" to="/Science">
            {" "}
            Science{" "}
          </Link>{" "}
          <Link className="link" to="/Business">
            {" "}
            Business{" "}
          </Link>{" "}
        </ul>{" "}
      </div>{" "}
      <Routes>
        <Route exact path="/Home" element={<Home />} />{" "}
        <Route exact path="/Health" element={<Health />} />{" "}
        <Route exact path="/Sport" element={<Sport />} />{" "}
        <Route exact path="/Technology" element={<Technology />} />{" "}
        <Route exact path="/Science" element={<Science />} />{" "}
        <Route exact path="/Business" element={<Business />} />{" "}
      </Routes>{" "}
    </Router>
  );
};

export default App;
