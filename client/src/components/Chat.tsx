import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socketServer = io("http://localhost:3000");

export default function Chat() {
  const [content, SetContent] = useState("");

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

    const chatBox = document.querySelector(".chatBox");
    chatBox?.appendChild(message);
  }

  return (
    <div>
      <div className="chatBox"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          socketServer.emit("sendMessage", content);
        }}
      >
        <input
          type="text"
          onChange={({ target: { value } }) => SetContent(value)}
        ></input>
        <input type="submit" value="전송" />
      </form>
    </div>
  );
}
