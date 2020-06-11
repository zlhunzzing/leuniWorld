import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import "../presenterStyles/GuestbookPresenter.css";
import * as services from "../services/User";

interface Props {
  isSignin: boolean;
  content: string;
  setContent: any;
  token: any;
  messageData: any;
  setMessageData: any;
  momenter: any;
  curPage: number;
  setCurPage: any;
  pager: any;
}

const GuestbookPresenter: React.FunctionComponent<Props> = ({
  isSignin,
  content,
  setContent,
  token,
  messageData,
  setMessageData,
  momenter,
  curPage,
  setCurPage,
  pager,
}: Props) => {
  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="HeaderFavoriteMenus">방명록</div>

      <div className="GuestbookChatbox">
        {messageData.length === 0 ? (
          <div>서버와 연결이 불안정합니다.</div>
        ) : (
          messageData[curPage - 1]
            .sort((a: any, b: any) => {
              return b.id - a.id;
            })
            .map((data: any, id: number) => (
              <div
                key={id}
                style={{
                  borderBottom: "1px solid black",
                  height: "100px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {data.username} {momenter(data.createdAt)}
                </div>
                {data.content.split("<br>").map((line: string, id: number) => (
                  <div
                    key={id}
                    style={{
                      textAlign: "left",
                      paddingLeft: "90px",
                      paddingRight: "90px",
                    }}
                  >
                    {line}
                    <br />
                  </div>
                ))}
              </div>
            ))
        )}
      </div>

      <ul>
        {messageData.length === 0 ? (
          <div>서버와 연결이 불안정합니다.</div>
        ) : (
          messageData.map((page: any, id: number) => (
            <li
              key={id}
              onClick={(x: any) => {
                setCurPage(id + 1);
              }}
            >
              <a href={`#${id + 1}`}>{id + 1}</a>
            </li>
          ))
        )}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          services.addCommnet(content, token, setMessageData, pager);
        }}
      >
        {isSignin ? (
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
          <div>로그인이 필요합니다.</div>
        )}
      </form>
    </div>
  );
};

export default GuestbookPresenter;
