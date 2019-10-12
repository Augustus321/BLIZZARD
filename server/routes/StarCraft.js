/* 用户路由 */
// 1. 导入express模块
const express = require("express");
// 2. 获取路由对象
const router = express.Router();
// 3. 处理路由对象
const getConnection = require("../mysqlConnection");
/**
 * 图片资源
 * kind 参数
 */


router.get("/images/StarCraft", (req, res) => {
    let {
        kind
    } = req.query;
    switch (kind) {
        // 轮播图
        case "slides": {
            let images = [];
            for (let i = 1; i <= 4; i++) {
                images.push(`slide_${i}.jpg`);
            }
            //轮播图上面的字
            let imageFont = [];
            for (let i = 1; i <= 5; i++) {
                imageFont.push(`slideItem_${i}.png`);
            }
            res.send({
                images,
                imageFont
            });
        }
        break;
        case "footer": {
            let imageFooter = [];
            for (let i = 1; i <= 2; i++) {
                imageFooter.push(`footer-logo-${i}.png`);
            }
            res.send(imageFooter);
        }
        break;
        case "footer_smm": {
            let footerSmm = [];
            for (let i = 1; i <= 5; i++) {
                imageFooter.push(`footer-smm-${i}.png`);
            }
            res.send(footerSmm);
        }
        break;
        case "imageVideo": {
            let imageVideo = [];
            for (let i = 1; i <= 5; i++) {
                imageFooter.push(`imgSm_${i}.png`);
            }
            res.send(imageVideo);
        }
        break;
    }
});

// 4. 导出路由
module.exports = router;