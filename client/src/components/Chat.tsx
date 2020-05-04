import React from "react";
import io from "socket.io-client";

import "../styles/Chat.css";

const socketServer = io("http://localhost:3000");

export interface ChatProps {}
export interface ChatState {
  content: string;
}
export interface Data {}

class Chat extends React.Component<ChatProps, ChatState> {
  constructor(props: ChatProps) {
    super(props);
    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    socketServer.on("connect", () => {
      console.log("connection server");
    });

    socketServer.on("sendMessage", (data: string) => {
      this.messageTemplate(data);
    });
  }

  onChangeMessage(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ content: e.target.value });
  }

  sendMessage(content: string) {
    socketServer.emit("sendMessage", content);
  }

  messageTemplate(content: string) {
    const message = document.createElement("div");
    message.innerHTML = content;

    const chatBox = document.querySelector(".chatBox");
    chatBox?.appendChild(message);
  }

  render() {
    return (
      <div className="Chat">
        <div className="chatBox"></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.sendMessage(this.state.content);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              this.onChangeMessage(e);
            }}
          ></input>
          <input type="submit" value="전송" />
        </form>
      </div>
    );
  }
}

export default Chat;
