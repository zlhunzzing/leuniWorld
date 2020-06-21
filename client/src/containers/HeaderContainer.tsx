import React, { useState } from "react";
import { store } from "../index";
import HeaderPresenter from "../presenters/HeaderPresenter";

export default function HeaderContainer() {
  const [signinUserId, setSigninUserId] = useState(
    store.getState().Auth.signinUserId
  );

  store.subscribe(() => {
    setSigninUserId(store.getState().Auth.signinUserId);
  });

  return <HeaderPresenter signinUserId={signinUserId} />;
}
