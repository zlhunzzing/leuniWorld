import React from "react";
import { Link } from "react-router-dom";
import * as services from "../services/User";

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
    <div
      style={{
        alignItems: "center",
      }}
    >
      <h1>로그인</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          services.signin(email, password, history);
        }}
      >
        <div>
          <input
            style={{
              width: "400px",
              height: "30px",
              margin: "5px",
              borderRadius: "5px",
            }}
            type="email"
            placeholder="이메일을 입력 해주세요"
            onChange={({ target: { value } }) => setEmail(value)}
          ></input>
        </div>
        <div>
          <input
            style={{
              width: "400px",
              height: "30px",
              margin: "5px",
              borderRadius: "5px",
            }}
            onChange={({ target: { value } }) => setPassword(value)}
            type="password"
            placeholder="비밀번호를 입력 해주세요"
          ></input>
        </div>
        <div>
          <Link to="/signup">회원가입하기</Link>
        </div>
        <button
          style={{
            width: "200px",
            height: "30px",
            margin: "5px",
            borderRadius: "5px",
            backgroundColor: "skyblue",
          }}
          type="submit"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default SigninPresenter;
