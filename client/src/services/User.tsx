import axios from "axios";
import { store } from "../index";
import * as authActions from "../modules/Auth";

const server = "localhost:3000";

export function signin(email: string, password: string, history: any) {
  return axios
    .post(`http://${server}/user/signin`, {
      email,
      password,
    })
    .then(async (res: any) => {
      document.cookie = `user = ${res.data.token}`;
      store.dispatch(authActions.signin({ userId: res.data.id }));
      // console.log(store.getState().Auth.token);
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
    .post(`http://${server}/user/signup`, {
      email,
      password,
      username,
    })
    .then((res) => {
      history.push("/signin");
      console.log(res);
    })
    .catch((err) => console.log(err.response));
}

export function getGuestbook(setMessageData: any, setPageIndex: any) {
  return axios
    .get(`http://${server}/user/guestbook`)
    .then((res) => {
      console.log(res.data.guestbooks);
      setMessageData(
        store.getState().Handle.messagePaging(res.data.guestbooks, 3)[0]
      );
      const pageCnt = store
        .getState()
        .Handle.messagePaging(res.data.guestbooks, 3)[1];
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
      `http://${server}/user/guestbook`,
      {
        content: content.replace(/\n/g, "<br>"),
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((res) => {
      setMessageData(
        store.getState().Handle.messagePaging(res.data.guestbooks, 3)[0]
      );
      const pageCnt = store
        .getState()
        .Handle.messagePaging(res.data.guestbooks, 3)[1];
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
      .delete(`http://${server}/user/guestbook`, {
        data: { id },
      })
      .then((res) => {
        setMessageData(
          store.getState().Handle.messagePaging(res.data.guestbooks, 3)[0]
        );
        const pageCnt = store
          .getState()
          .Handle.messagePaging(res.data.guestbooks, 3)[1];
        setPageIndex(store.getState().Handle.messageRange(pageCnt));
      })
      .catch((err) => console.log(err.response));
  }
}

export function getFreeboard(setList: any, setPageIndex: any) {
  return axios
    .get(`http://${server}/user/freeboard`)
    .then((res) => {
      setList(
        store.getState().Handle.messagePaging(res.data.freeboards, 18)[0]
      );
      const pageCnt = store
        .getState()
        .Handle.messagePaging(res.data.freeboards, 18)[1];
      setPageIndex(store.getState().Handle.messageRange(pageCnt));
    })
    .catch((err) => {
      console.log(err.response);
    });
}

export function getBoardview(setPostInfo: any, paramsId: number) {
  return axios
    .get(`http://${server}/user/boardview/${paramsId}`)
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
      `http://${server}/user/freeboard`,
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

export function putBoardview(
  title: string,
  content: string,
  token: any,
  setIsPut: any,
  paramsId: number
) {
  return axios
    .put(
      `http://${server}/user/boardview/${paramsId}`,
      {
        title,
        content: content.replace(/\n/g, "<br>"),
      },
      { headers: { Authorization: token } }
    )
    .then((res) => {
      setIsPut(false);
    })
    .catch((err) => {
      console.log(err.response);
    });
}

export function deleteBoardview(id: number, history: any) {
  if (window.confirm("댓글을 삭제하겠습니까?")) {
    return axios
      .delete(`http://${server}/user/boardview/${id}`, {
        data: { id },
      })
      .then((res) => {
        history.push("/freeboard");
      })
      .catch((err) => console.log(err.response));
  }
}
