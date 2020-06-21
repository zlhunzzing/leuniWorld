import React, { useState, useEffect } from "react";
import BoardviewPresenter from "../presenters/BoardviewPresenter";
import * as services from "../services/User";

export default function BoardviewContainer() {
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    services.getBoardview(setPostInfo);
  }, []);

  console.log(postInfo);

  return <BoardviewPresenter postInfo={postInfo} />;
}
