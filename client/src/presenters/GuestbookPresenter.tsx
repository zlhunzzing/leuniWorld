import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import "../presenterStyles/GuestbookPresenter.css";
import * as services from "../services/User";
import { ERROR_MESSAGE } from "../common/ErrorMessages";

interface Props {
  isSigninUserId: any;
  content: string;
  setContent: any;
  token: any;
  messageData: any;
  setMessageData: any;
  momenter: any;
  curPage: number;
  setCurPage: any;
  pageIndex: any;
  setPageIndex: any;
  curPageIndex: number;
  setCurPageIndex: any;
}

const GuestbookPresenter: React.FunctionComponent<Props> = ({
  isSigninUserId,
  content,
  setContent,
  token,
  messageData,
  setMessageData,
  momenter,
  curPage,
  setCurPage,
  pageIndex,
  setPageIndex,
  curPageIndex,
  setCurPageIndex,
}: Props) => {
  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="HeaderFavoriteMenus">방명록</div>

      <div className="GuestbookChatbox">
        {messageData[curPage - 1] ? (
          messageData[curPage - 1]
            .sort((a: any, b: any) => {
              return b.id - a.id;
            })
            .map((data: any, id: number) => (
              <div key={id} className="GuestbookBlock">
                <div className="GuestbookHeader">
                  {data.username} {momenter(data.createdAt)}{" "}
                  {Number(data.userId) === isSigninUserId ? (
                    <span
                      onClick={() => {
                        services.deleteGuestbook(
                          data.id,
                          setMessageData,
                          setPageIndex
                        );
                      }}
                    >
                      [삭제]
                    </span>
                  ) : null}
                </div>

                {data.content.split("<br>").map((line: string, id: number) => (
                  <div key={id} className="GuestbookContent">
                    {line}
                    <br />
                  </div>
                ))}
              </div>
            ))
        ) : (
          <div>{ERROR_MESSAGE.WRONG_INTERNET}</div>
        )}
      </div>

      <ul>
        {pageIndex[curPageIndex - 2] ? (
          <span
            onClick={() => {
              setCurPageIndex(curPageIndex - 1);
            }}
            style={{
              fontWeight: "bold",
            }}
          >
            [prev]
          </span>
        ) : null}
        {pageIndex[curPageIndex - 1] ? (
          pageIndex[curPageIndex - 1].map((page: any, id: number) => (
            <li
              key={id}
              onClick={(x: any) => {
                setCurPage(page);
              }}
            >
              <a href={`#${page}`}>{page}</a>
            </li>
          ))
        ) : (
          <div>{ERROR_MESSAGE.WRONG_INTERNET}</div>
        )}
        {pageIndex[curPageIndex] ? (
          <span
            onClick={() => {
              setCurPageIndex(curPageIndex + 1);
            }}
            style={{
              fontWeight: "bold",
            }}
          >
            [next]
          </span>
        ) : null}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          services.addCommnet(content, token, setMessageData, setPageIndex);
        }}
      >
        {isSigninUserId ? (
          <div>
            <textarea
              maxLength={140}
              style={{
                width: "596px",
                height: "60px",
                resize: "none",
              }}
              onChange={({ target: { value } }) => setContent(value)}
            ></textarea>
            <br />
            <input type="submit" value="전송" />
          </div>
        ) : (
          <div>{ERROR_MESSAGE.SIGNIN_REQUIRE}</div>
        )}
      </form>
    </div>
  );
};

export default GuestbookPresenter;
