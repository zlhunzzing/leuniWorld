import React, { useState } from "react";
import store from "../store";
import HeaderPresenter from "../presenters/HeaderPresenter";

export default function HeaderContainer() {
  const [isSignUserId, setIsSignUserId] = useState(
    store.getState().isSignUserId
  );

  store.subscribe(() => {
    setIsSignUserId(store.getState().isSignUserId);
  });

  return <HeaderPresenter isSignUserId={isSignUserId} />;
}
