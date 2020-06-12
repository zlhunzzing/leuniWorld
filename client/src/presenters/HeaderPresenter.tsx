import React from "react";
import { Link } from "react-router-dom";
import SignoutContainer from "../containers/SignoutContainer";
import "../presenterStyles/HeaderPresenter.css";

interface Props {
  isSignUserId: any;
}

const HeaderPresenter: React.FunctionComponent<Props> = ({
  isSignUserId,
}: Props) => {
  return (
    <header>
      <div className="SignupBar">
        {isSignUserId ? <SignoutContainer /> : <Link to="/signin">로그인</Link>}
      </div>
      <Link className="Title" to="main">
        르니월드
      </Link>
    </header>
  );
};

export default HeaderPresenter;
