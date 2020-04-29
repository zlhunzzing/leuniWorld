import React from "react";
import { Link } from "react-router-dom";

// import "./LeuniCaffee.css";

function LeuniCaffee() {
  return (
    <div className="Main">
      <header>
        <div className="SignUp">
          <Link to="/signup">로그인</Link>
        </div>
        <Link className="Title" to="main">
          르니월드
        </Link>
      </header>

      <div className="Menus">르니카페</div>
    </div>
  );
}

export default LeuniCaffee;
