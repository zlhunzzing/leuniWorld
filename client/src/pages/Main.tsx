import React from "react";
import { Link } from "react-router-dom";

import "../styles/Main.css";

// Component
import Header from "../components/Header";

function Main() {
  return (
    <div className="Main">
      <Header></Header>

      <div className="Menus">
        <Link to="/leunicaffee">르니카페</Link>
      </div>
    </div>
  );
}

export default Main;
