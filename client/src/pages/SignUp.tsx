import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface MyState {
  email: any;
  password: any;
  username: any;
}

class SignUp extends React.Component<{}, MyState> {
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
    const { email, password, username } = this.state;
    return (
      <div
        style={{
          alignItems: "center",
        }}
      >
        <h1>Sign Up</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:4000/main/signup", {
                email: email,
                password: password,
                username: username,
              })
              .then((res) => {
                // return <Link to="/main"></Link>; ㅠㅠ
              })
              .catch((err) => console.log(err));
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
            <input
              style={{
                width: "195px",
                height: "30px",
                margin: "5px",
                borderRadius: "5px",
              }}
              onChange={this.handleInputValue("username")}
              placeholder="이름"
            ></input>
          </div>
          <div>
            <Link to="/main">이미 아이디가 있으신가요?</Link>
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
            회원가입
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
