import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";
// import "../presenterStyles/GuestbookPresenter.css";
// import * as services from "../services/User";
import { ERROR_MESSAGE } from "../common/ErrorMessages";

interface Props {
  // isSigninUserId: any;
  // content: string;
  // setContent: any;
  // token: any;
  list: any;
  setList: any;
  // momenter: any;
  // curPage: number;
  // setCurPage: any;
  // pageIndex: any;
  // setPageIndex: any;
  // curPageIndex: number;
  // setCurPageIndex: any;
}

const FreeboardPresenter: React.FunctionComponent<Props> = ({
  // isSigninUserId,
  // content,
  // setContent,
  // token,
  list,
  setList,
}: // momenter,
// curPage,
// setCurPage,
// pageIndex,
// setPageIndex,
// curPageIndex,
// setCurPageIndex,
Props) => {
  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>
      <div className="HeaderFavoriteMenus">자유게시판</div>

      <div className="GuestbookChatbox">
        {list ? (
          list.map((data: any, id: number) => (
            <div key={id}>
              <Link to={`/boardview/${data.id}`} onClick={() => console.log(1)}>
                {data.title}
              </Link>
            </div>
          ))
        ) : (
          <div>{ERROR_MESSAGE.WRONG_INTERNET}</div>
        )}
      </div>
    </div>
  );
};

export default FreeboardPresenter;
