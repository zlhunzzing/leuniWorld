import React from "react";
import { Link } from "react-router-dom";
import SignoutContainer from "../containers/SignoutContainer";
import "../presenterStyles/HeaderPresenter.css";

interface Props {
  signinUserId: any;
}

const HeaderPresenter: React.FunctionComponent<Props> = ({
  signinUserId,
}: Props) => {
  return (
    <header>
      <div className="SignupBar">
        {signinUserId ? <SignoutContainer /> : <Link to="/signin">로그인</Link>}
      </div>
      <Link className="Title" to="/main">
        르니월드
      </Link>
    </header>
  );
};

export default HeaderPresenter;
