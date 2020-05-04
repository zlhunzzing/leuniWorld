import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <header>
      <div className="SignUp">
        <Link to="/signup">로그인</Link>
      </div>
      <Link className="Title" to="main">
        르니월드
      </Link>
    </header>
  );
}

export default header;
