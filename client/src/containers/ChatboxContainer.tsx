import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatboxPresenter from "../presenters/ChatboxPresenter";
import store from "../store";

const socketServer = io("http://localhost:3000");

export default function ChatboxContainer() {
  const [content, setContent] = useState("");
  const mounting = useState(store.getState().Control.isChatmount)[0];

  useEffect(() => {
    socketServer.on("connect", () => {
      console.log("connection server");
    });

    if (mounting) {
      socketServer.on("sendMessage", (data: string) => {
        messageTemplate(data);
      });
      store.dispatch({ type: "STOP_MOUNT" });
    }
  }, [mounting]);

  function messageTemplate(content: string) {
    const message = document.createElement("div");
    message.innerHTML = content;
    message.style.textAlign = "left";
    message.style.paddingLeft = "10px";

    const chatBox = document.querySelector(".chatbox");
    chatBox?.prepend(message);
  }

  function sendMessage() {
    socketServer.emit("sendMessage", content.replace(/\n/g, "<br>"));
  }

  return <ChatboxPresenter sendMessage={sendMessage} setContent={setContent} />;
}
