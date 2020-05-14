const dotenv = require("dotenv");
dotenv.config();

const dbName = (() => {
  if (process.env.NODE_ENV) {
    return `${process.env.TYPEORM_DATABASE}_${process.env.NODE_ENV}`;
  } else {
    return process.env.TYPEORM_DATABASE;
  }
})();

module.exports = {
  type: process.env.TYPEORM_TYPE,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: dbName,
  entities: ["src/entity/**/*.ts"],
  logging: false,
  synchronize: true,
};
