import React, { useState } from "react";
import SigninPresenter from "../presenters/SigninPresenter";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SigninPresenter
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
}
