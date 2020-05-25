import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import store from "../store";

interface MyState {
  email: any;
  password: any;
  username: any;
}

export default class Signin extends React.Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = (key: any) => (e: any) => {
    const obj: any = { [key]: e.target.value };
    this.setState(obj);
  };

  render() {
    const { email, password } = this.state;
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
            axios
              .post("http://localhost:3000/user/signin", {
                email: email,
                password: password,
              })
              .then(async (res) => {
                store.dispatch({ type: "SIGNIN" });
                console.log("로그인 성공");
              })
              .catch((err) => console.log(err.response));
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
              onChange={this.handleInputValue("email")}
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
              onChange={this.handleInputValue("password")}
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
  }
}
