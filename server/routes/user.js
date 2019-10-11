/* 用户路由 */
// 1. 导入express模块
const express = require("express");
// 2. 获取路由对象
const router = express.Router();
// 3. 处理路由对象
const getConnection = require("../mysqlConnection");

// 注册
router.post("/register", (req, res) => {
    let { email,password,usename,ID_number,pone } = req.body;
    let sql = "INSERT INTO userinfo (email,password,name,ID_number,pone) VALUES (?,?,?,?,?)";
    let sqlparams = [email, password, usename, ID_number, pone];
    let db = getConnection();
    db.connect();
    db.query(sql, sqlparams, (err, sqlRes) => {
        if (err) {
            // 用户已存在
            res.send({
                status: "200",
                errMsg: "用户已存在"
            })
        } else {
            res.send({
                status: "201",
                user: req.body
            })
        }
    })
    db.end();
})

// 4. 导出路由
module.exports = router;