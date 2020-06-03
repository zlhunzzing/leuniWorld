import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import ChatboxContainer from "../containers/ChatboxContainer";

export default function LeuniCaffeePresenter() {
  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="HeaderFavoriteMenus">르니카페</div>
      <ChatboxContainer></ChatboxContainer>
    </div>
  );
}
