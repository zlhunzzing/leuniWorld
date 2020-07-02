# leuniWorld (르니월드)

- Web 놀이터 (커뮤니티 웹)

## 구현된 기능

- 로그인 & 로그아웃

![sign](https://j.gifs.com/5QkZ3X.gif)

- 실시간 채팅

![chat](https://j.gifs.com/D1DjG6.gif)

- 방명록

![guestbook](https://j.gifs.com/1WOZgZ.gif)

- 자유게시판

![freeboard](https://j.gifs.com/WLrJ5E.gif)

## 설치 방법 (Installation)

- server 사용언어 - Typescript, Mysql, TypeORM
- client 사용언어 - Typescript, React
- [/server] DB - Mysql 설치가 필요헙니다.
- [/server] .env.example을 보고 .env파일을 새로 작성해야합니다.
- [/client] /src/services/User.tsx와 /src/container/ChatboxContainer.tsx에서 서버 IP를 수정해야합니다.

## 사용법 (Usage)

- [/server] npm run dev
  > dev 서버 실행

* [/client] npm start
  > 클라이언트 실행

- [/server] npm run test
  > test코드 실행
