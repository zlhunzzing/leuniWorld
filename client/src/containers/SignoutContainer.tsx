import React from "react";
import { store } from "../index";
import * as authActions from "../modules/Auth";

export default function SignoutContainer() {
  return (
    <div
      className="SignoutButton"
      onClick={() => {
        if (window.confirm("로그아웃을 하시겠습니까?")) {
          store.dispatch(authActions.signout());
          document.cookie = "user =;";
        }
      }}
    >
      로그아웃
    </div>
  );
}
