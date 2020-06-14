import React, { useState, useEffect } from "react";
import GuestbookPresenter from "../presenters/GuestbookPresenter";
import store from "../store";
import * as services from "../services/User";
import moment from "moment";

export default function GuestbookContainer() {
  const [isSigninUserId, setIsSigninUserId] = useState(
    store.getState().isSignUserId
  );
  const [content, setContent] = useState("");
  const rawToken = useState(
    document.cookie.match("(^|;) ?user=([^;]*)(;|$)")
  )[0];
  const token = useState(
    isSigninUserId ? JSON.parse(JSON.stringify(rawToken))[2] : null
  )[0];
  const [messageData, setMessageData] = useState([]);
  const listSize = useState(8)[0];
  const [curPage, setCurPage] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const pageRange = useState(10)[0];
  const [curPageIndex, setCurPageIndex] = useState(1);

  store.subscribe(() => {
    setIsSigninUserId(store.getState().isSignUserId);
  });

  function handleMessagePaging(messageData: any) {
    let pagingData = [];
    let onePageData = [];
    for (let i = messageData.length - 1; i > 0; i--) {
      onePageData.push(messageData[i]);
      if (onePageData.length === listSize) {
        pagingData.push(onePageData);
        onePageData = [];
      }
    }
    if (onePageData.length !== 0) {
      pagingData.push(onePageData);
    }
    return [pagingData, pagingData.length];
  }

  function handlePageRange(messageDataLength: number) {
    let rangeData = [];
    let oneRangeData = [];
    for (let i = 1; i < messageDataLength + 1; i++) {
      oneRangeData.push(i);
      if (oneRangeData.length === pageRange) {
        rangeData.push(oneRangeData);
        oneRangeData = [];
      }
    }
    if (oneRangeData.length !== 0) {
      rangeData.push(oneRangeData);
    }
    return rangeData;
  }

  useEffect(() => {
    services.getComment(
      setMessageData,
      handleMessagePaging,
      setPageIndex,
      handlePageRange
    );
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
      handleMessagePaging={handleMessagePaging}
      curPage={curPage}
      setCurPage={setCurPage}
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
      handlePageRange={handlePageRange}
      curPageIndex={curPageIndex}
      setCurPageIndex={setCurPageIndex}
    />
  );
}
