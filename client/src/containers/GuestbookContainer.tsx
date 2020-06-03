import React, { useState } from "react";
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

  store.subscribe(() => {
    setIsSignin(store.getState().isSignin);
  });

  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="HeaderFavoriteMenus">방명록</div>

      <div className="chatBox">
        <div>메세지 1</div>
        <div>메세지 2</div>
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
              console.log(res);
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
