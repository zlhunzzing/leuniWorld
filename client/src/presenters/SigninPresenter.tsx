import React from "react";
import { Link } from "react-router-dom";
import * as services from "../services/User";
import "../presenterStyles/SigninPresenter.css";

interface Props {
  email: string;
  setEmail: any;
  password: string;
  setPassword: any;
  history: any;
}

const SigninPresenter: React.FunctionComponent<Props> = ({
  email,
  setEmail,
  password,
  setPassword,
  history,
}: Props) => {
  return (
    <div className="Main">
      <br></br>
      <Link className="Title" to="/main">
        르니월드
      </Link>

      <div className="HeaderFavoriteMenus">로그인</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          services.signin(email, password, history);
        }}
      >
        <div
          style={
            {
              // width: "400px",
              // height: "90px",
              // margin: "0 auto",
              // border: "1px solid black",
            }
          }
        >
          <div>
            <input
              style={{
                width: "300px",
                height: "30px",
                margin: "5px",
              }}
              type="email"
              placeholder="이메일을 입력 해주세요"
              onChange={({ target: { value } }) => setEmail(value)}
            ></input>
          </div>
          <div>
            <input
              style={{
                width: "300px",
                height: "30px",
                margin: "5px",
              }}
              onChange={({ target: { value } }) => setPassword(value)}
              type="password"
              placeholder="비밀번호를 입력 해주세요"
            ></input>
          </div>
        </div>
        <div>
          <Link to="/signup" className="toSignLink">
            회원가입하기
          </Link>
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default SigninPresenter;
