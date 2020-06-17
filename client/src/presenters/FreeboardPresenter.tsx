import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
// import "../presenterStyles/GuestbookPresenter.css";
// import * as services from "../services/User";

interface Props {
  // isSigninUserId: any;
  // content: string;
  // setContent: any;
  // token: any;
  // messageData: any;
  // setMessageData: any;
  // momenter: any;
  // handleMessagePaging: any;
  // curPage: number;
  // setCurPage: any;
  // pageIndex: any;
  // setPageIndex: any;
  // handlePageRange: any;
  // curPageIndex: number;
  // setCurPageIndex: any;
}

const FreeboardPresenter: React.FunctionComponent<Props> = (
  // isSigninUserId,
  // content,
  // setContent,
  // token,
  // messageData,
  // setMessageData,
  // momenter,
  // curPage,
  // setCurPage,
  // handleMessagePaging,
  // pageIndex,
  // setPageIndex,
  // handlePageRange,
  // curPageIndex,
  // setCurPageIndex,
  Props
) => {
  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="HeaderFavoriteMenus">자유게시판</div>

      <div className="GuestbookChatbox">
        <div
          style={{
            borderBottom: "1px solid black",
          }}
        >
          글제목
        </div>
      </div>
    </div>
  );
};

export default FreeboardPresenter;
