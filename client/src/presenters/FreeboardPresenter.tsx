import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";
import { ERROR_MESSAGE } from "../common/ErrorMessages";
import "../presenterStyles/FreeboardPresenter.css";
import { store } from "../index";

interface Props {
  list: any;
  signinUserId: any;
  history: any;
}

const FreeboardPresenter: React.FunctionComponent<Props> = ({
  list,
  signinUserId,
  history,
}: Props) => {
  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>
      <div className="HeaderFavoriteMenus">자유게시판</div>

      <div className="GuestbookChatbox">
        {list ? (
          list.map((data: any, id: number) => (
            <div
              key={id}
              className="FreeboardList"
              style={{ borderBottom: "1px solid gray", textAlign: "left" }}
            >
              <span style={{ paddingLeft: "10px", fontSize: "14px" }}>
                {data.id}
              </span>
              <Link className="FreeboardTitle" to={`/boardview/${data.id}`}>
                {data.title}
              </Link>
              <span
                style={{
                  float: "right",
                  paddingRight: "10px",
                  fontSize: "14px",
                }}
              >
                {store.getState().Handle.momenter(data.createdAt, "YYYY.MM.DD")}
              </span>
            </div>
          ))
        ) : (
          <div>{ERROR_MESSAGE.WRONG_INTERNET}</div>
        )}
      </div>

      <form className="FreeboardForm">
        <button
          onClick={() => {
            if (signinUserId) {
              history.push("/boardwrite");
            } else {
              alert(ERROR_MESSAGE.SIGNIN_REQUIRE);
            }
          }}
          style={{
            textAlign: "right",
          }}
        >
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default FreeboardPresenter;
