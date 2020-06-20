import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
// import "../presenterStyles/GuestbookPresenter.css";
// import * as services from "../services/User";
// import { ERROR_MESSAGE } from "../common/ErrorMessages";

interface Props {
  //   isSigninUserId: any;
  //   content: string;
  //   setContent: any;
  //   token: any;
  //   messageData: any;
  //   setMessageData: any;
  //   momenter: any;
  //   curPage: number;
  //   setCurPage: any;
  //   pageIndex: any;
  //   setPageIndex: any;
  //   curPageIndex: number;
  //   setCurPageIndex: any;
}

const BoardviewPresenter: React.FunctionComponent<Props> = ({}: //   isSigninUserId,
//   content,
//   setContent,
//   token,
//   messageData,
//   setMessageData,
//   momenter,
//   curPage,
//   setCurPage,
//   pageIndex,
//   setPageIndex,
//   curPageIndex,
//   setCurPageIndex,
Props) => {
  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="HeaderFavoriteMenus">{<br></br>}</div>

      <div className="GuestbookChatbox"></div>
    </div>
  );
};

export default BoardviewPresenter;
