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
router.post("/", (req, res) => {
    let {username, order} = req.body;
    let sqlParams = [username, order];
    console.log(order)
    let sql = "INSERT INTO `order` (username, `order`) VALUES (?,?)";
    let db = getConnection();
    db.connect();
    db.query(sql, sqlParams, (err, sqlRes) => {
        if (err) {
            console.log(err)
        }else {
            res.send({
                status: "200",
                user: req.body
            })
        }
    })
    db.end();
});


// 4. 导出路由
module.exports = router;




