import React from "react";
import { Link } from "react-router-dom";

import store from "../store";

// function header() {
//   return (
//     <header>
//       <div className="SignUp">
//         <Link to="/signin">로그인</Link>
//       </div>
//       <Link className="Title" to="main">
//         르니월드
//       </Link>
//     </header>
//   );
// }

export default function header() {
  const state = store.getState().isSignin;
  return (
    <header>
      <div className="SignUp">
        {state ? (
          <Link to="/signin">로그아웃</Link>
        ) : (
          <Link to="/signin">로그인</Link>
        )}
      </div>
      <Link className="Title" to="main">
        르니월드
      </Link>
    </header>
  );
}
