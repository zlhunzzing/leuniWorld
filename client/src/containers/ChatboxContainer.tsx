import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatboxPresenter from "../presenters/ChatboxPresenter";

const socketServer = io("http://localhost:3000");

export default function ChatboxContainer() {
  const [content, setContent] = useState("");

  useEffect(() => {
    socketServer.on("connect", () => {
      console.log("connection server");
    });

    socketServer.on("sendMessage", (data: string) => {
      messageTemplate(data);
    });
  }, []);

  function messageTemplate(content: string) {
    const message = document.createElement("div");
    message.innerHTML = content;

    const chatBox = document.querySelector(".chatbox");
    chatBox?.appendChild(message);
  }

  function sendMessage() {
    socketServer.emit("sendMessage", content.replace(/\n/g, "<br>"));
  }

  return <ChatboxPresenter sendMessage={sendMessage} setContent={setContent} />;
}
