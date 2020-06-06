import axios from "axios";
import store from "../store";

export function signin(email: string, password: string, history: any) {
  return axios
    .post("http://localhost:3000/user/signin", {
      email: email,
      password: password,
    })
    .then(async (res: any) => {
      store.dispatch({ type: "SIGNIN" });
      document.cookie = `user = ${res.data.token}`;
      history.push("/");
    })
    .catch((err) => console.log(err.response));
}

export function signup(
  email: string,
  password: string,
  username: string,
  history: any
) {
  return axios
    .post("http://localhost:3000/user/signup", {
      email: email,
      password: password,
      username: username,
    })
    .then((res) => {
      console.log(res.status);
      console.log("his", history);
      history.push("/signin");
    })
    .catch((err) => console.log(err.response));
}

export function getCommnet(setMessageData: any) {
  return axios
    .get("http://localhost:3000/user/comment")
    .then((res) => {
      setMessageData(res.data.comments);
    })
    .catch((err) => {
      console.log(err.messages);
    });
}

export function addCommnet(content: string, token: any, setMessageData: any) {
  return axios
    .post(
      "http://localhost:3000/user/comment",
      {
        content: content,
      },
      { headers: { Authorization: token } }
    )
    .then((res) => {
      setMessageData(res.data.comments);
    })
    .catch((err) => console.log(err.response));
}
