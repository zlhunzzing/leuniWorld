import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import ChatboxContainer from "../containers/ChatboxContainer";

// CSS
import "../presenterStyles/LeuniCaffeePresenter.css";

export default function LeuniCaffeePresenter() {
  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="Menus">르니카페</div>
      <ChatboxContainer></ChatboxContainer>
    </div>
  );
}
