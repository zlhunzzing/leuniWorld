import React, { useState } from "react";
import store from "../store";
import HeaderPresenter from "../presenters/HeaderPresenter";

export default function HeaderContainer() {
  const [isSignin, setIsSignin] = useState(store.getState().isSignin);

  store.subscribe(() => {
    setIsSignin(!isSignin);
  });

  return <HeaderPresenter isSignin={isSignin} />;
}
