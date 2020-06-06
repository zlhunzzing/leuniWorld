import React from "react";
import { Link } from "react-router-dom";
import SignoutContainer from "../containers/SignoutContainer";
import "../presenterStyles/HeaderPresenter.css";

interface Props {
  isSignin: boolean;
}

const HeaderPresenter: React.FunctionComponent<Props> = ({
  isSignin,
}: Props) => {
  return (
    <header>
      <div className="SignupBar">
        {isSignin ? <SignoutContainer /> : <Link to="/signin">로그인</Link>}
      </div>
      <Link className="Title" to="main">
        르니월드
      </Link>
    </header>
  );
};

export default HeaderPresenter;
