// 1. 导入express模块
const express = require("express");
// 2. 获取路由对象
const router = express.Router();



router.get("/images/news/news-list0", (req, res) => {
    let {
        kind
    } = req.query;
    switch (kind) {
        case "slides": {
            let images = [];
            for (let i = 1; i < 4; i++) {
                images.push(`list-${i}.jpg`);
            }
            res.send(images);
        }
        break;
    }
});
module.exports = router;