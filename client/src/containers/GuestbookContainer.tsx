import React, { useState, useEffect } from "react";
// import GuestbookPresenter from "../presenters/GuestbookPresenter";
import HeaderContainer from "../containers/HeaderContainer";
import store from "../store";
import axios from "axios";

export default function GuestbookContainer() {
  const [isSignin, setIsSignin] = useState(store.getState().isSignin);
  const [content, setContent] = useState("");
  const rawToken = useState(
    document.cookie.match("(^|;) ?user=([^;]*)(;|$)")
  )[0];
  const token = useState(
    isSignin ? JSON.parse(JSON.stringify(rawToken))[2] : null
  )[0];
  const [messageData, setMessageData] = useState([]);

  store.subscribe(() => {
    setIsSignin(store.getState().isSignin);
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/comment")
      .then((res) => {
        setMessageData(res.data.comments);
      })
      .catch((err) => {
        console.log(err.messages);
      });
  }, []);

  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="HeaderFavoriteMenus">방명록</div>

      <div className="chatBox">
        {messageData.length === 0 ? (
          <div>서버와 연결이 불안정합니다.</div>
        ) : (
          messageData.map((x: any, y) => (
            <div key={y}>
              이름: {x.username} 내용: {x.content}
            </div>
          ))
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
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
        }}
      >
        {isSignin ? (
          <div>
            <input
              type="text"
              onChange={({ target: { value } }) => setContent(value)}
            ></input>
            <input type="submit" value="전송" />
          </div>
        ) : (
          <div>로그인이 필요합니다.</div>
        )}
      </form>
    </div>
  );
}
