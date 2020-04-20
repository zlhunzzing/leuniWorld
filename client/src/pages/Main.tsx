import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      LeuniWorld!<br></br>
      <Link to="/signup">아이디가 없으신가요? - 회원가입</Link>
    </div>
  );
}

export default Main;
