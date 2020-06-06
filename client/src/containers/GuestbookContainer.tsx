import React, { useState, useEffect } from "react";
import GuestbookPresenter from "../presenters/GuestbookPresenter";
import store from "../store";
import * as services from "../services/User";

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
    services.getCommnet(setMessageData);
  }, []);

  return (
    <GuestbookPresenter
      isSignin={isSignin}
      content={content}
      setContent={setContent}
      token={token}
      messageData={messageData}
      setMessageData={setMessageData}
    />
  );
}
