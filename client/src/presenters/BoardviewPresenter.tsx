import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";
import { ERROR_MESSAGE } from "../common/ErrorMessages";
import * as services from "../services/User";
import { store } from "../index";

interface Props {
  postInfo: any;
  isPut: boolean;
  setIsPut: any;
  signinUserId: any;
  title: string;
  setTitle: any;
  content: string;
  setContent: any;
  token: any;
  params: any;
  history: any;
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
  token,
  params,
  history,
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
          <div
            style={{
              borderBottom: "1px solid gray",
            }}
          >
            <span
              style={{
                float: "right",
                paddingRight: "5px",
                borderLeft: "1px solid black",
                paddingLeft: "5px",
              }}
            >
              {store
                .getState()
                .Handle.momenter(postInfo.createdAt, "YYYY.MM.DD HH:mm")}
            </span>
            <span
              style={{
                paddingLeft: "5px",
                paddingRight: "5px",
                borderRight: "1px solid black",
              }}
            >
              글쓴이: {postInfo.username}
            </span>
            <span
              style={{
                paddingLeft: "5px",
              }}
            >
              제목: {postInfo.title}
            </span>{" "}
          </div>
          <div
            style={{
              paddingLeft: "5px",
            }}
          >
            내용: {postInfo.content}
          </div>
        </div>
      ) : null}
      <form className="FreeboardForm">
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
        <button
          onClick={() => {
            if (window.confirm("글을 삭제하시겠습니까?")) {
              if (signinUserId === Number(postInfo.userId)) {
                services.deleteBoardview(params.id, history);
              } else {
                alert(ERROR_MESSAGE.WRONG_USER);
              }
            }
          }}
        >
          글삭제
        </button>
      </form>
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
            services.putBoardview(title, content, token, setIsPut, params.id);
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
