import {
    BASE_URL
} from "./lib";

export function loaddingFlash() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/StarCraft/images/StarCraft?kind=slides`,
            success({
                images,
                imageFont
            }) {
                let htmlStr = "";
                htmlStr +=
                    `<div class="swiper-slide">
                            <span style="background-image: url(${BASE_URL}/images/StarCraft/slide_1.jpg);">
                            <p class="anim-item anim-right">
                                <img src="${BASE_URL}/images/StarCraft/slideItem_1.png">
                                <a><img src="${BASE_URL}/images/StarCraft/slideItem_0.png"></a>
                            </p>
                            </span>
                        </div>
                        <div class="swiper-slide">
                            <span style="background-image: url(${BASE_URL}/images/StarCraft/slide_2.jpg);">
                            <p class="anim-item anim-right">
                                <img src="${BASE_URL}/images/StarCraft/slideItem_2.png">
                                <a><img src="${BASE_URL}/images/StarCraft/slideItem_0.png"></a>
                            </p>
                            </span>
                        </div>
                        <div class="swiper-slide">
                            <span style="background-image: url(${BASE_URL}/images/StarCraft/slide_3.jpg);">
                            <p class="anim-item anim-right">
                                <img src="${BASE_URL}/images/StarCraft/slideItem_3.png">
                                <a><img src="${BASE_URL}/images/StarCraft/slideItem_0.png"></a>
                            </p>
                            </span>
                        </div>
                        <div class="swiper-slide">
                            <span style="background-image: url(${BASE_URL}/images/StarCraft/slide_4.jpg);">
                            <p class="anim-item anim-right">
                                <img src="${BASE_URL}/images/StarCraft/slideItem_4.png">
                                <a><img src="${BASE_URL}/images/StarCraft/slideItem_0.png"></a>
                            </p>
                            </span>
                        </div>
                        `;
                $(".swiper-wrapper").html(htmlStr);
                resolve();
            }
        })
    })
};
export function loaddingFooter() {
    return new Promise((resolve, reject) => {
        let htmlStr = ` <img src="${BASE_URL}/images/StarCraft/footer-logo-1.png">
                        <img src="${BASE_URL}/images/StarCraft/footer-logo-2.png">
                         `;
        $(".footer-logo").html(htmlStr);
        resolve();
    })
};
export function loaddingSmm() {
    return new Promise((resolve, reject) => {
        let htmlStr = ` <img src="${BASE_URL}/images/StarCraft/footer-imm-1.png"><img src="${BASE_URL}/images/StarCraft/footer-imm-2.png"><img src="${BASE_URL}/images/StarCraft/footer-imm-3.png">
        <img src="${BASE_URL}/images/StarCraft/footer-imm-4.png">
        <img src="${BASE_URL}/images/StarCraft/footer-imm-5.png"><span>|适龄提示：适合13岁及以上使用 家长监护工程</span>
                        `;
        $(".footer-smm").html(htmlStr);
        resolve();
    })
};
export function loaddingVideo() {
    return new Promise((resolve, reject) => {
        let htmlStr = ` 
            <li style="background-image: url(${BASE_URL}/images/StarCraft/landing.png);">
                <p class="title">《星际争霸II》免费畅玩：战役</p>
                <p class="video-btn" style="background-image: url(${BASE_URL}/images/StarCraft/imgSm_1.jpg);"><span><i class="iconfont">&#xe620;</i></span></p>
            </li>
            <li style="background-image: url(${BASE_URL}/images/StarCraft/landing.png);">
                <p class="title">《星际争霸II》免费畅玩：对决</p>
                <p class="video-btn" style="background-image: url(${BASE_URL}/images/StarCraft/imgSm_2.jpg);"><span><i class="iconfont">&#xe620;</i></span></p>
            </li>
            <li style="background-image: url(${BASE_URL}/images/StarCraft/landing.png);">
                <p class="title">《星际争霸II》免费畅玩：合作任务</p>
                <p class="video-btn" style="background-image: url(${BASE_URL}/images/StarCraft/imgSm_3.jpg);"><span><i class="iconfont">&#xe620;</i></span></p>
            </li>
                         `;
        $(".swiper-grid").html(htmlStr);
        resolve();
    })
};