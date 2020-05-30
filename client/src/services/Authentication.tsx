import axios from "axios";
import store from "../store";

export function signin(email: string, password: string) {
  return axios
    .post("http://localhost:3000/user/signin", {
      email: email,
      password: password,
    })
    .then(async (res: any) => {
      store.dispatch({ type: "SIGNIN" });
      document.cookie = `user = ${res.data.token}`;
      console.log("로그인 성공");
    })
    .catch((err) => console.log(err.response));
}

export function signup(email: string, password: string, username: string) {
  return axios
    .post("http://localhost:3000/user/signup", {
      email: email,
      password: password,
      username: username,
    })
    .then((res) => {
      // return <Link to="/user"></Link>; ㅠㅠ
    })
    .catch((err) => console.log(err.response));
}
