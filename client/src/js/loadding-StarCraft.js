import {
    BASE_URL
} from "./lib";

export function loaddingFlash() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/StarCraft/images?kind=slides`,
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
export function loaddingLand() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/StarCraft/images?kind=landing`,
            success(res) {
                let htmlStr = `
                        <li style="background: url(${BASE_URL}/images/StarCraft/landing.png)"><a href="#"></a></li>
                        <li style="background: url(${BASE_URL}/images/StarCraft/landing.png)"><a href="#"></a></li>
                        <li style="background: url(${BASE_URL}/images/StarCraft/landing.png)"><a href="#"></a></li>`;
                $(".swiper-grid").html(htmlStr);
                resolve();
            }
        })
    })
}