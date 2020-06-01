import React, { useState } from "react";
import SigninPresenter from "../presenters/SigninPresenter";
import { useHistory } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useState(useHistory())[0];

  return (
    <SigninPresenter
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      history={history}
    />
  );
}
