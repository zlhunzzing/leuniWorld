import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";
import { ERROR_MESSAGE } from "../common/ErrorMessages";
import * as services from "../services/User";

interface Props {
  postInfo: any;
  isPut: boolean;
  setIsPut: any;
  signinUserId: any;
  title: string;
  setTitle: any;
  content: string;
  setContent: any;
  history: any;
  token: any;
}

const BoardviewPresenter: React.FunctionComponent<Props> = ({
  postInfo,
  isPut,
  setIsPut,
  signinUserId,
  title,
  setTitle,
  content,
  setContent,
  history,
  token,
}: Props) => {
  return isPut === false ? (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="HeaderFavoriteMenus">
        <Link className="HeaderFavoriteMenu" to="/freeboard">
          자유게시판
        </Link>
      </div>

      {postInfo ? (
        <div
          className="GuestbookChatbox"
          style={{
            textAlign: "left",
          }}
        >
          <span>제목: {postInfo.title}</span>{" "}
          <span>작성일: {postInfo.createdAt}</span>
          <div>글쓴이: {postInfo.username}</div>
          <div>내용: {postInfo.content}</div>
        </div>
      ) : null}
      <button
        onClick={() => {
          if (window.confirm("글을 수정하시겠습니까?")) {
            if (signinUserId === Number(postInfo.userId)) {
              setIsPut(true);
            } else {
              alert(ERROR_MESSAGE.WRONG_USER);
            }
          }
        }}
      >
        글수정
      </button>
    </div>
  ) : (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="HeaderFavoriteMenus">
        <Link className="HeaderFavoriteMenu" to="/freeboard">
          자유게시판
        </Link>
      </div>

      <div
        className="GuestbookChatbox"
        style={{
          textAlign: "left",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            services.putBoardview(title, content, token, history);
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

export default BoardviewPresenter;
