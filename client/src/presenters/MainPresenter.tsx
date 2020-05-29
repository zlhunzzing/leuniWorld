import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";

// CSS
import "../presenterStyles/MainPresenter.css";

export default function MainPresenter() {
  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="Menus">
        <Link to="/leunicaffee">르니카페</Link>
      </div>
    </div>
  );
}
