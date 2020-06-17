import axios from "axios";
import { store } from "../index";
import * as authActions from "../modules/Auth";

export function signin(email: string, password: string, history: any) {
  return axios
    .post("http://localhost:3000/user/signin", {
      email: email,
      password: password,
    })
    .then(async (res: any) => {
      store.dispatch(authActions.signin({ userId: res.data.id }));
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

export function getComment(setMessageData: any, setPageIndex: any) {
  return axios
    .get("http://localhost:3000/user/comment")
    .then((res) => {
      setMessageData(
        store.getState().Handle.messagePaging(res.data.comments)[0]
      );
      const pageCnt = store
        .getState()
        .Handle.messagePaging(res.data.comments)[1];
      setPageIndex(store.getState().Handle.messageRange(pageCnt));
    })
    .catch((err) => {
      console.log(err.response);
    });
}

export function addCommnet(
  content: string,
  token: any,
  setMessageData: any,
  setPageIndex: any
) {
  return axios
    .post(
      "http://localhost:3000/user/comment",
      {
        content: content.replace(/\n/g, "<br>"),
      },
      { headers: { Authorization: token } }
    )
    .then((res) => {
      setMessageData(
        store.getState().Handle.messagePaging(res.data.comments)[0]
      );
      const pageCnt = store
        .getState()
        .Handle.messagePaging(res.data.comments)[1];
      setPageIndex(store.getState().Handle.messageRange(pageCnt));
    })
    .catch((err) => console.log(err.response));
}

export function deleteComment(
  id: number,
  setMessageData: any,
  setPageIndex: any
) {
  if (window.confirm("댓글을 삭제하겠습니까?")) {
    return axios
      .delete("http://localhost:3000/user/comment", {
        data: { id: id },
      })
      .then((res) => {
        setMessageData(
          store.getState().Handle.messagePaging(res.data.comments)[0]
        );
        const pageCnt = store
          .getState()
          .Handle.messagePaging(res.data.comments)[1];
        setPageIndex(store.getState().Handle.messageRange(pageCnt));
      })
      .catch((err) => console.log(err.response));
  }
}
