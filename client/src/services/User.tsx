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
      history.push("/signin");
    })
    .catch((err) => console.log(err.response));
}

export function getGuestbook(setMessageData: any, setPageIndex: any) {
  return axios
    .get("http://localhost:3000/user/guestbook")
    .then((res) => {
      setMessageData(
        store.getState().Handle.messagePaging(res.data.guestbooks)[0]
      );
      const pageCnt = store
        .getState()
        .Handle.messagePaging(res.data.guestbooks)[1];
      setPageIndex(store.getState().Handle.messageRange(pageCnt));
    })
    .catch((err) => {
      console.log(err.response);
    });
}

export function addGuestbook(
  content: string,
  token: any,
  setMessageData: any,
  setPageIndex: any
) {
  return axios
    .post(
      "http://localhost:3000/user/guestbook",
      {
        content: content.replace(/\n/g, "<br>"),
      },
      { headers: { Authorization: token } }
    )
    .then((res) => {
      setMessageData(
        store.getState().Handle.messagePaging(res.data.guestbooks)[0]
      );
      const pageCnt = store
        .getState()
        .Handle.messagePaging(res.data.guestbooks)[1];
      setPageIndex(store.getState().Handle.messageRange(pageCnt));
    })
    .catch((err) => console.log(err.response));
}

export function deleteGuestbook(
  id: number,
  setMessageData: any,
  setPageIndex: any
) {
  if (window.confirm("댓글을 삭제하겠습니까?")) {
    return axios
      .delete("http://localhost:3000/user/guestbook", {
        data: { id: id },
      })
      .then((res) => {
        setMessageData(
          store.getState().Handle.messagePaging(res.data.guestbooks)[0]
        );
        const pageCnt = store
          .getState()
          .Handle.messagePaging(res.data.guestbooks)[1];
        setPageIndex(store.getState().Handle.messageRange(pageCnt));
      })
      .catch((err) => console.log(err.response));
  }
}

export function getFreeboard(setList: any) {
  return axios
    .get("http://localhost:3000/user/freeboard")
    .then((res) => {
      setList(res.data.freeboards);
      // const pageCnt = store
      //   .getState()
      //   .Handle.messagePaging(res.data.freeboards)[1];
      // setPageIndex(store.getState().Handle.messageRange(pageCnt));
    })
    .catch((err) => {
      console.log(err.response);
    });
}

export function getBoardview(setPostInfo: any) {
  return axios
    .get(
      `http://localhost:3000/user/boardview/${
        store.getState().Handle.curPostId
      }`
    )
    .then((res) => {
      setPostInfo(res.data.boardview);
    })
    .catch((err) => {
      console.log(err.response);
    });
}

export function addFreeboard(
  title: string,
  content: string,
  token: any,
  history: any
) {
  console.log(typeof title, typeof content, token);
  return axios
    .post(
      "http://localhost:3000/user/freeboard",
      {
        title,
        content: content.replace(/\n/g, "<br>"),
      },
      { headers: { Authorization: token } }
    )
    .then((res) => {
      history.push("/freeboard");
    })
    .catch((err) => console.log(err.response));
}
