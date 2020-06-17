import React, { useState, useEffect } from "react";
import GuestbookPresenter from "../presenters/GuestbookPresenter";
import { store } from "../index";
import * as services from "../services/User";
import moment from "moment";

export default function GuestbookContainer() {
  const [isSigninUserId, setIsSigninUserId] = useState(
    store.getState().Auth.isSignUserId
  );
  const [content, setContent] = useState("");
  const rawToken = useState(
    document.cookie.match("(^|;) ?user=([^;]*)(;|$)")
  )[0];
  const token = useState(
    isSigninUserId ? JSON.parse(JSON.stringify(rawToken))[2] : null
  )[0];
  const [messageData, setMessageData] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const [curPageIndex, setCurPageIndex] = useState(1);

  store.subscribe(() => {
    setIsSigninUserId(store.getState().Auth.isSignUserId);
  });

  useEffect(() => {
    services.getComment(setMessageData, setPageIndex);
  }, []);

  function momenter(time: any) {
    return moment(new Date(time)).format("YYYY년 MM월 DD일 HH시 mm분");
  }

  return (
    <GuestbookPresenter
      isSigninUserId={isSigninUserId}
      content={content}
      setContent={setContent}
      token={token}
      messageData={messageData}
      setMessageData={setMessageData}
      momenter={momenter}
      curPage={curPage}
      setCurPage={setCurPage}
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
      curPageIndex={curPageIndex}
      setCurPageIndex={setCurPageIndex}
    />
  );
}
