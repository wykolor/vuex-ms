var express = require("express");
var router = express.Router();

// 引入数据库模块
var connection = require("./conn");
connection.connect(() => {
  console.log("数据库链接成功....");
});

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

// 接收登录请求
router.post("/login", (req, res) => {
  // 模拟数据库
  let userList = [
    { username: "admin", password: "123456", id: "1", realname: "kolor" },
    { username: "guest", password: "123456", id: "2", realname: "xioayu" }
  ];
  // 接收用户名和密码
  let { username, password } = req.body;
  // 检测数据库中是否存在该用户
  userList.forEach(item => {
    if (item.username === username && item.password === password) {
      res.send({ code: 1000, data: item, message: "恭喜！登录成功" });
    } else {
      res.send({ code: 1001, data: {}, message: "请检查用户名或者密码！" });
    }
  });
  //  去数据库查看是否存在这个账户和密码的账户
});
module.exports = router;
