import React, { useState, useEffect } from "react";
import FreeboardPresenter from "../presenters/FreeboardPresenter";
// import { store } from "../index";
import * as services from "../services/User";
// import moment from "moment";

export default function FreeboardContainer() {
  // const [isSigninUserId, setIsSigninUserId] = useState(
  //   store.getState().isSignUserId
  // );
  // const [content, setContent] = useState("");
  // const rawToken = useState(
  //   document.cookie.match("(^|;) ?user=([^;]*)(;|$)")
  // )[0];
  // const token = useState(
  //   isSigninUserId ? JSON.parse(JSON.stringify(rawToken))[2] : null
  // )[0];
  const [list, setList] = useState([]);
  // const listSize = useState(3)[0];
  // const [curPage, setCurPage] = useState(1);
  // const [pageIndex, setPageIndex] = useState(0);
  // const pageRange = useState(10)[0];
  // const [curPageIndex, setCurPageIndex] = useState(1);

  // store.subscribe(() => {
  //   setIsSigninUserId(store.getState().isSignUserId);
  // });

  useEffect(() => {
    services.getFreeboard(setList);
  }, []);

  return (
    <FreeboardPresenter
      // isSigninUserId={isSigninUserId}
      // content={content}
      // setContent={setContent}
      // token={token}
      list={list}
      setList={setList}
      // momenter={momenter}
      // curPage={curPage}
      // setCurPage={setCurPage}
      // pageIndex={pageIndex}
      // setPageIndex={setPageIndex}
      // curPageIndex={curPageIndex}
      // setCurPageIndex={setCurPageIndex}
    />
  );
}
