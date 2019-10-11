// 1. 导入express模块
const express = require("express");
// 2. 获取路由对象
const router = express.Router();
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
});
/**
 * 图片资源
 * kind 参数
 */
router.get("/images", (req, res) => {
    let {
        kind
    } = req.query;
    switch (kind) {
        // 盒子小图片
        case "immg": {
            let image_immg = [];
            for (let i = 1; i < 4; i++) {
                image_immg.push(`slide_${i}.jpg`);
            }
            res.send(image_immg);
        }
        break;
        // 横幅图标
        // case "banner": {
        //     let icons = [],
        //         promos = [];
        //     let texts = ["小米秒杀", "企业团购", "F码通道", "米粉卡", "以旧换新", "话费充值"];

        //     for (let i = 1; i < 7; i++) {
        //         icons.push({
        //             imgName: `icon_${i}.png`,
        //             text: texts[i - 1]
        //         });
        //     }
        //     for (let i = 1; i < 4; i++) {
        //         promos.push(`promo_${i}.jpg`);
        //     }
        //     res.send({
        //         icons,
        //         promos
        //     });
        // }
        // break;
    }
});
module.exports = router;