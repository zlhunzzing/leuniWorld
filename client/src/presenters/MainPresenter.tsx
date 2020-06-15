import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";
import "../presenterStyles/MainPresenter.css";

export default function MainPresenter() {
  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="HeaderFavoriteMenus">
        <Link className="HeaderFavoriteMenu" to="/leunicaffee">
          르니카페
        </Link>
        <Link className="HeaderFavoriteMenu" to="/freeboard">
          자유게시판
        </Link>
        <Link className="HeaderFavoriteMenu" to="/guestbook">
          방명록
        </Link>
      </div>
    </div>
  );
}
