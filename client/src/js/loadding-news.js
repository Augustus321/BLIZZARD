import {
    BASE_URL
} from "./lib";


export function loaddingImmg() {
    return new Promise((resolve, reject) => {
        let htmlStr = `
                <li>
                    <img src="${BASE_URL}/images/news/news-immg-1.jpg" class="imm">
                    <p class="news-im-title">魔兽世界</p>
                    <p class="new-im-word">假日活动：《争霸艾泽拉斯》地下城</p>
                </li>
                <li>
                    <img src="${BASE_URL}/images/news/news-immg-2.jpg" class="imm">
                    <p class="news-im-title">魔兽世界</p>
                    <p class="new-im-word">假日活动：战场</p>
                </li>
                <li>
                    <img src="${BASE_URL}/images/news/news-immg-3.jpg" class="imm">
                    <p class="news-im-title">魔兽世界</p>
                    <p class="new-im-word">假日活动：《德拉诺之王》时空漫游</p>
                </li>
                <li>
                    <img src="${BASE_URL}/images/news/news-immg-4.jpg" class="imm">
                    <p class="news-im-title">魔兽世界</p>
                    <p class="new-im-word">《魔兽世界》 争霸艾泽拉斯最新内容补丁现已上线</p>
                </li>`;
        $(".news-im").html(htmlStr);
        resolve();
    })
}