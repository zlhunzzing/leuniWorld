import React, { useState, useEffect } from "react";
import BoardviewPresenter from "../presenters/BoardviewPresenter";
import * as services from "../services/User";
import { store } from "../index";
import { useHistory } from "react-router-dom";

export default function BoardviewContainer() {
  const [postInfo, setPostInfo] = useState(null);
  const [isPut, setIsPut] = useState(false);
  const signinUserId = useState<any>(store.getState().Auth.signinUserId)[0];
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useState(useHistory())[0];
  const rawToken = useState(
    document.cookie.match("(^|;) ?user=([^;]*)(;|$)")
  )[0];
  const token = useState(
    signinUserId ? JSON.parse(JSON.stringify(rawToken))[2] : null
  )[0];

  useEffect(() => {
    services.getBoardview(setPostInfo);
  }, []);

  return (
    <BoardviewPresenter
      postInfo={postInfo}
      isPut={isPut}
      setIsPut={setIsPut}
      signinUserId={signinUserId}
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      history={history}
      token={token}
    />
  );
}
