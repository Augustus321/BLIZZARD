/* 用户路由 */
// 1. 导入express模块
const express = require("express");
// 2. 获取路由对象
const router = express.Router();
// 3. 处理路由对象
const getConnection = require("../mysqlConnection");
/**
 * 守望先锋
 * kind 参数
 */
router.get("/videos",(req,res) =>{
    let{kind} = req.query;
    switch(kind){
        case "Overwatch-header":{
            res.send(`Overwatch-header.mp4`);
        }
    }
})

// 4. 导出路由
module.exports = router;




