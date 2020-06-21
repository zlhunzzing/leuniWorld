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

  store.subscribe(() => {
    setSigninUserId(store.getState().Auth.signinUserId);
  });

  useEffect(() => {
    services.getFreeboard(setList);
  }, []);

  return (
    <FreeboardPresenter
      list={list}
      signinUserId={signinUserId}
      history={history}
    />
  );
}
