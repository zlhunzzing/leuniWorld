import chai from "chai";
import chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
import app from "../app";
import { createConnection } from "typeorm";
import { getRepository } from "typeorm";
import { UserEntity } from "../entity/UserEntity";

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
          email: "user2@dogmate.com",
          password: "1234",
          username: "user2",
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
      await getRepository(User).query(`TRUNCATE TABLE user;`);
    });

    it("it should response 200 status code with signin", (done) => {
      const agent = chai.request.agent(app);
      agent
        .post("/user/signin")
        .send({
          email: "user2@dogmate.com",
          password: "1234",
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
