import React, { useState, useEffect } from "react";
import GuestbookPresenter from "../presenters/GuestbookPresenter";
import store from "../store";
import * as services from "../services/User";
import moment from "moment";

export default function GuestbookContainer() {
  const [isSignUserId, setIsSignUserId] = useState(
    store.getState().isSignUserId
  );
  const [content, setContent] = useState("");
  const rawToken = useState(
    document.cookie.match("(^|;) ?user=([^;]*)(;|$)")
  )[0];
  const token = useState(
    isSignUserId ? JSON.parse(JSON.stringify(rawToken))[2] : null
  )[0];
  const [messageData, setMessageData] = useState([]);
  const pageSize = useState(10)[0];
  const [curPage, setCurPage] = useState(1);

  store.subscribe(() => {
    setIsSignUserId(store.getState().isSignUserId);
  });

  function pager(data: any) {
    let pagingData = [];
    let onePageData = [];
    for (let i = data.length - 1; i > 0; i--) {
      onePageData.push(data[i]);
      if (onePageData.length === pageSize) {
        pagingData.push(onePageData);
        onePageData = [];
      }
    }
    if (onePageData.length !== 0) {
      pagingData.push(onePageData);
    }
    return pagingData;
  }

  useEffect(() => {
    services.getCommnet(setMessageData, pager);
  }, []);

  function momenter(time: any) {
    return moment(new Date(time)).format("YYYY년 MM월 DD일 HH시 mm분");
  }

  return (
    <GuestbookPresenter
      isSignUserId={isSignUserId}
      content={content}
      setContent={setContent}
      token={token}
      messageData={messageData}
      setMessageData={setMessageData}
      momenter={momenter}
      curPage={curPage}
      pager={pager}
      setCurPage={setCurPage}
    />
  );
}
