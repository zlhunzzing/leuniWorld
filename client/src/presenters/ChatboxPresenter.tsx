import React from "react";
import "../presenterStyles/ChatboxPresenter.css";

interface Props {
  sendMessage: any;
  setContent: any;
}

const ChatboxPresenter: React.FunctionComponent<Props> = ({
  sendMessage,
  setContent,
}: Props) => {
  return (
    <div className="ChatboxPresenter">
      <div className="chatbox"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <textarea
          maxLength={140}
          style={{
            width: "596px",
            height: "60px",
            resize: "none",
          }}
          onChange={({ target: { value } }) => setContent(value)}
        ></textarea>
        <br />
        <input type="submit" value="전송" />
      </form>
    </div>
  );
};

export default ChatboxPresenter;
