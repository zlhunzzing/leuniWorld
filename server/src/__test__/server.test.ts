import chai from "chai";
import chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
import app from "../app";
import { createConnection } from "typeorm";
import { getRepository } from "typeorm";
import { UserEntity } from "../entity/UserEntity";
import { GuestbookEntity } from "../entity/GuestbookEntity";

let token;

describe("Implemented testcase", () => {
  createConnection();

  describe("GET /", () => {
    it("기본 요청 시 응답할 수 있다.", (done) => {
      const agent = chai.request.agent(app);
      agent.get("/").end((err, res) => {
        if (err) done(err);
        expect(res.text).to.have.to.equal("hello");
        done();
      });
    });
  });

  describe("POST /user/signup", () => {
    it("it should response 201 status code with user signup", (done) => {
      const agent = chai.request.agent(app);
      agent
        .post("/user/signup")
        .send({
          email: "user@leuni.com",
          password: "1234",
          username: "user",
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(201);
          done();
        });
    });
  });

  describe("POST /user/signin", () => {
    afterEach(async () => {
      await getRepository(UserEntity).query(`TRUNCATE TABLE user_entity;`);
    });

    it("it should response 200 status code and token with signin", (done) => {
      const agent = chai.request.agent(app);
      agent
        .post("/user/signin")
        .send({
          email: "user@leuni.com",
          password: "1234",
        })
        .end((err, res) => {
          if (err) done(err);
          token = res.body.token;
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("token");
          done();
        });
    });
  });

  describe("guesbook test", () => {
    afterEach(async () => {
      await getRepository(GuestbookEntity).query(
        `TRUNCATE TABLE guestbook_entity;`
      );
    });

    describe("POST /user/guestbook", () => {
      it("it should response 201 status code and guestbooks", (done) => {
        const agent = chai.request.agent(app);
        agent
          .post("/user/guestbook")
          .set("Authorization", token)
          .send({
            content: "real?",
          })
          .end((err, res) => {
            if (err) done(err);
            expect(res).to.have.status(201);
            expect(res.body).to.have.property("guestbooks");
            done();
          });
      });
    });
  });
});
