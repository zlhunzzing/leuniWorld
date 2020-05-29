import React, { useState } from "react";
import SignupPresenter from "../presenters/SignupPresenter";

export default function SignupContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <SignupPresenter
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      username={username}
      setUsername={setUsername}
    />
  );
}
