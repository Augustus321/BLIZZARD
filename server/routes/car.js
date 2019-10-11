/* 用户路由 */
// 1. 导入express模块
const express = require("express");
// 2. 获取路由对象
const router = express.Router();
// 3. 处理路由对象
const getConnection = require("../mysqlConnection");
/**
 * 购物车
 * kind 参数
 */
router.post("/insert", (req, res) => {
    let { username,name,title,price,shopbg } = req.body;
    let sql = "INSERT INTO car (username,name,title,price,shopbg) VALUES (?,?,?,?,?)";
    let sqlparams = [username, name, title, price, shopbg];
    let db = getConnection();
    db.connect();
    db.query(sql, sqlparams, (err, sqlRes) => {
        console.log(err);
        if (err) {
            // 用户已存在
            res.send({
                status: "200",
                errMsg: "添加失败"
            })
        } else {
            res.send({
                status: "201",
                errMsg: req.body
            })
        }
    })
    db.end();
});
router.get("/introduce", (req, res) => {
    let {kind} = req.query;
    let sql = `SELECT * FROM shopping WHERE username = '${kind}'`;
    const db = getConnection();
    db.connect();
    db.query(sql,[kind], (err, sqlRes) => {
        if(err) {
            console.log(err);
        }else {
            res.send({
                contentlist: sqlRes
            })
        }
    })
    db.end();
});



// 4. 导出路由
module.exports = router;




