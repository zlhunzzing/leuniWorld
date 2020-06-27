import React, { useState, useEffect } from "react";
import FreeboardPresenter from "../presenters/FreeboardPresenter";
import * as services from "../services/User";
import { store } from "../index";
import { useHistory } from "react-router-dom";

export default function FreeboardContainer() {
  const [list, setList] = useState([]);
  const [signinUserId, setSigninUserId] = useState(
    store.getState().Auth.signinUserId
  );
  const history = useState(useHistory())[0];
  const [curPage, setCurPage] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const [curPageIndex, setCurPageIndex] = useState(1);

  store.subscribe(() => {
    setSigninUserId(store.getState().Auth.signinUserId);
  });

  useEffect(() => {
    services.getFreeboard(setList, setPageIndex);
  }, []);

  return (
    <FreeboardPresenter
      list={list}
      signinUserId={signinUserId}
      history={history}
      curPage={curPage}
      setCurPage={setCurPage}
      pageIndex={pageIndex}
      curPageIndex={curPageIndex}
      setCurPageIndex={setCurPageIndex}
    />
  );
}
