// 引入mysql
const MYSQL = require("mysql");

// 链接数据库
var connection = MYSQL.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "vuexms"
});

module.exports = connection;
