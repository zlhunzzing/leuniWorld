import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";

interface Props {
  postInfo: any;
}

const BoardviewPresenter: React.FunctionComponent<Props> = ({
  postInfo,
}: Props) => {
  return (
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
          <div>내용: {postInfo.content}</div>
        </div>
      ) : null}
    </div>
  );
};

export default BoardviewPresenter;
