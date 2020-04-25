import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";

function Main() {
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

      <div className="Menus">
        <span className="Menu">무설치게임</span>
        <span className="Menu">무지개의 기적(준비중)</span>
      </div>
    </div>
  );
}

export default Main;
