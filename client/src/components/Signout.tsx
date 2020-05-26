import React from "react";
import store from "../store";

export default function Signout() {
  return (
    <div
      className="Signout"
      onClick={() => {
        if (window.confirm("로그아웃을 하시겠습니까?")) {
          store.dispatch({ type: "SIGNIN" });
          document.cookie = "user =;";
        }
      }}
    >
      로그아웃
    </div>
  );
}
