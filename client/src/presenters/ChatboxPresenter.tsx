import React from "react";

interface Props {
  sendMessage: any;
  setContent: any;
}

const ChatboxPresenter: React.FunctionComponent<Props> = ({
  sendMessage,
  setContent,
}: Props) => {
  return (
    <div>
      <div className="chatBox"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input
          type="text"
          onChange={({ target: { value } }) => setContent(value)}
        ></input>
        <input type="submit" value="전송" />
      </form>
    </div>
  );
};

export default ChatboxPresenter;
