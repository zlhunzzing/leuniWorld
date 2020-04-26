import React from "react";
import { Link } from "react-router-dom";

// import "./PortableGames.css";

function PortableGames() {
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

      <ul style={{ listStyle: "none" }}>
        <li
          style={{
            float: "left",
            marginRight: "5px",
          }}
        >
          <Link to="portablegames">게임 1</Link>
        </li>
        <li
          style={{
            float: "left",
          }}
        >
          <Link to="portablegames">게임 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default PortableGames;
