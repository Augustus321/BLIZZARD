import {
    BASE_URL
} from "./lib";
export function loaddingImmg() {
    return new Promise((resolve, reject) => {
        let htmlStr = `
                <li>
                    <img src="${BASE_URL}/images/news/news-immg-1.jpg">
                    <p class="news-im-title">魔兽世界</p>
                    <p>经典怀旧服免费角色转移服务第五期</p>
                </li>
                <li>
                    <img src="${BASE_URL}/images/news/news-immg-2.jpg">
                    <p class="news-im-title">魔兽世界</p>
                    <p>经典怀旧服免费角色转移服务第四期(10月6日更新)</p>
                </li>
                <li>
                    <img src="${BASE_URL}/images/news/news-immg-3.jpg">
                    <p class="news-im-title">魔兽世界</p>
                    <p>购买虚拟门票解锁游戏内连体幻化套装及宠物</p>
                </li>
                <li>
                    <img src="${BASE_URL}/images/news/news-immg-4.jpg">
                    <p class="news-im-title">魔兽世界</p>
                    <p>经典怀旧服免费角色转移服务第三期(10/3更新)</p>
                </li>`;
        $(".news-im").html(htmlStr);
        resolve();
    })
}