// 1. 导入express模块
const express = require("express");
// 2. 获取路由对象
const router  = express.Router();
// 3. 导入数据库
const getConnection = require("../mysqlConnection");
// 4. 定义路由
router.get("/recentNews", (req, res) => {
    const db = getConnection();
    db.connect();
    db.query("SELECT * FROM recentNews", (err, sqlRes) => {
        res.send(JSON.stringify(sqlRes));
    })
    db.end();
})
module.exports = router;