import React, { useState } from "react";
import BoardwritePresenter from "../presenters/BoardwritePresenter";
import { store } from "../index";
import { useHistory } from "react-router-dom";

export default function BoardwriteContainer() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [signinUserId, setSigninUserId] = useState(
    store.getState().Auth.signinUserId
  );
  const rawToken = useState(
    document.cookie.match("(^|;) ?user=([^;]*)(;|$)")
  )[0];
  const token = useState(
    signinUserId ? JSON.parse(JSON.stringify(rawToken))[2] : null
  )[0];
  const history = useState(useHistory())[0];

  store.subscribe(() => {
    setSigninUserId(store.getState().Auth.signinUserId);
  });

  return (
    <BoardwritePresenter
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      token={token}
      history={history}
    />
  );
}
