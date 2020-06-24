import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";
import { ERROR_MESSAGE } from "../common/ErrorMessages";

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
            <div key={id}>
              <Link to={`/boardview/${data.id}`}>{data.title}</Link>
            </div>
          ))
        ) : (
          <div>{ERROR_MESSAGE.WRONG_INTERNET}</div>
        )}
      </div>

      <button
        onClick={() => {
          if (signinUserId) {
            history.push("/boardwrite");
          } else {
            alert(ERROR_MESSAGE.SIGNIN_REQUIRE);
          }
        }}
      >
        글쓰기
      </button>
    </div>
  );
};

export default FreeboardPresenter;
