import React from "react";
// import { Link } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";
// import "../presenterStyles/MainPresenter.css";
import * as services from "../services/User";

interface Props {
  title: string;
  setTitle: any;
  content: string;
  setContent: any;
  token: any;
  history: any;
}

const BoardwritePresenter: React.FunctionComponent<Props> = ({
  title,
  setTitle,
  content,
  setContent,
  token,
  history,
}: Props) => {
  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="HeaderFavoriteMenus">{<br></br>}</div>

      <div
        className="GuestbookChatbox"
        style={{
          textAlign: "left",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            services.addFreeboard(title, content, token, history);
          }}
        >
          제목 :{" "}
          <input
            type="text"
            onChange={({ target: { value } }) => setTitle(value)}
          ></input>
          <br></br>
          내용 :{" "}
          <textarea
            maxLength={420}
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
    </div>
  );
};

export default BoardwritePresenter;
