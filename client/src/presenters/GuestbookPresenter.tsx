import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import "../presenterStyles/GuestbookPresenter.css";
import * as services from "../services/User";
import moment from "moment";

interface Props {
  isSignin: boolean;
  content: string;
  setContent: any;
  token: any;
  messageData: any;
  setMessageData: any;
}

const GuestbookPresenter: React.FunctionComponent<Props> = ({
  isSignin,
  content,
  setContent,
  token,
  messageData,
  setMessageData,
}: Props) => {
  return (
    <div className="Main">
      <HeaderContainer></HeaderContainer>

      <div className="HeaderFavoriteMenus">방명록</div>

      <div className="GuestbookChatbox">
        {messageData.length === 0 ? (
          <div>서버와 연결이 불안정합니다.</div>
        ) : (
          messageData
            .sort((a: any, b: any) => {
              return b.id - a.id;
            })
            .map((data: any, id: any) => (
              <div
                key={id}
                style={{
                  textAlign: "center",
                  border: "1px solid black",
                  height: "100px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {data.username}{" "}
                  {moment(new Date(data.createdAt)).format(
                    "YYYY년 MM월 DD일 HH시 mm분"
                  )}
                </div>
                <div>{data.content}</div>
              </div>
            ))
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          services.addCommnet(content, token, setMessageData);
        }}
      >
        {isSignin ? (
          <div>
            <input
              type="text"
              onChange={({ target: { value } }) => setContent(value)}
            ></input>
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
