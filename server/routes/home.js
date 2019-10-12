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
router.get("/homepage", (req, res) => {
    let { kind } = req.query;
    switch (kind) {
        // 游戏链接图片
        case "homepages": {
            let images = [];
            let homenames = ["《魔兽世界》", "《暗黑破坏神|||》", "《星际争霸||》", "《星际争霸：重制版》", "《风暴英雄》", "《炉石传说》", "《守望先锋》"];
            let homelinks =["http://www.battlenet.com.cn/wow/","http://d3.blizzard.cn/home","./static/pages/StarCraft.html","http://sc.blizzard.cn/home","http://heroes.blizzard.cn/landing","http://hs.blizzard.cn/landing","./static/pages/Overwatch.html"];
            for (let i = 1; i < 8; i++) {
                images.push({
                    imgName: `homepage_${i}.png`,
                    hometext: homenames[i - 1],
                    homelink:homelinks[i-1]
                });
            }
            res.send({ images });
        } break;
    }
})

// 4. 导出路由
module.exports = router;




