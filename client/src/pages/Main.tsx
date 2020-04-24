import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div
      className="Main"
      style={{
        textAlign: "center",
        width: "1024px",
        // border: "1px solid black",
      }}
    >
      <header>
        <div
          className="SignUp"
          style={{
            textAlign: "right",
          }}
        >
          <Link to="/signup">로그인</Link>
        </div>
        <Link
          className="Title"
          to="main"
          style={{
            color: "black",
            fontSize: "30px",
          }}
        >
          르니월드
        </Link>
      </header>
      <div
        className="Menu"
        style={{
          margin: "20px",
        }}
      >
        <span
          style={{
            padding: "5px",
          }}
        >
          무설치게임
        </span>
        <span
          style={{
            padding: "5px",
          }}
        >
          무지개의 기적(준비중)
        </span>
      </div>
    </div>
  );
}

export default Main;
