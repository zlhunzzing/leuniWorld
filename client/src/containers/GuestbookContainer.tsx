import React, { useState, useEffect } from "react";
import GuestbookPresenter from "../presenters/GuestbookPresenter";
import store from "../store";
import * as services from "../services/User";
import moment from "moment";

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

  function momenter(time: any) {
    return moment(new Date(time)).format("YYYY년 MM월 DD일 HH시 mm분");
  }

  return (
    <GuestbookPresenter
      isSignin={isSignin}
      content={content}
      setContent={setContent}
      token={token}
      messageData={messageData}
      setMessageData={setMessageData}
      momenter={momenter}
    />
  );
}
