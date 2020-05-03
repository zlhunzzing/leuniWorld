import React from "react";
import io from "socket.io-client";

const socketClient = io("http://localhost:3000");

export interface ChatProps {}

export interface ChatState {}

class Chat extends React.Component<ChatProps, ChatState> {
  constructor(props: ChatProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    socketClient.on("connect", () => {
      console.log("connection server");
    });
  }

  render() {
    return <div>채팅</div>;
  }
}

export default Chat;
