import React from "react";
import { Link } from "react-router-dom";

// Component
import Header from "../components/Header";

// CSS
import "../pagesStyles/Main.css";

export default function Main() {
  return (
    <div className="MainPage">
      <Header></Header>

      <div className="Menus">
        <Link to="/leunicaffee">르니카페</Link>
      </div>
    </div>
  );
}
