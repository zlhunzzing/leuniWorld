import React, { useState } from "react";
import { store } from "../index";
import HeaderPresenter from "../presenters/HeaderPresenter";

export default function HeaderContainer() {
  const [isSignUserId, setIsSignUserId] = useState(
    store.getState().Auth.isSignUserId
  );

  store.subscribe(() => {
    setIsSignUserId(store.getState().Auth.isSignUserId);
  });

  return <HeaderPresenter isSignUserId={isSignUserId} />;
}
