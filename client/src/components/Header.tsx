import React, { useState } from "react";
import { Link } from "react-router-dom";
import store from "../store";

// Component
import Signout from "../components/Signout";

export default function Header() {
  const [isSIgnin, setIsSIgnin] = useState(store.getState().isSignin);

  store.subscribe(() => {
    setIsSIgnin(!isSIgnin);
  });

  return (
    <header>
      <div className="SignUp">
        {/* {this.state.isSignin ? <Signout /> : <Link to="/signin">로그인</Link>} */}
        {isSIgnin ? <Signout /> : <Link to="/signin">로그인</Link>}
      </div>
      <Link className="Title" to="main">
        르니월드
      </Link>
    </header>
  );
}
