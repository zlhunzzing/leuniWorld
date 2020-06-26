import React from "react";
import * as services from "../services/User";
import HeaderContainer from "../containers/HeaderContainer";

interface Props {
  email: string;
  setEmail: any;
  password: string;
  setPassword: any;
  username: string;
  setUsername: any;
  history: any;
}

const SignupPresenter: React.FunctionComponent<Props> = ({
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  history,
}: Props) => {
  return (
    <div className="Main">
      <HeaderContainer />

      <div className="HeaderFavoriteMenus">회원가입</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          services.signup(email, password, username, history);
        }}
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
        <div>
          <input
            style={{
              width: "300px",
              height: "30px",
              margin: "5px",
            }}
            onChange={({ target: { value } }) => setUsername(value)}
            placeholder="이름"
          ></input>
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignupPresenter;
