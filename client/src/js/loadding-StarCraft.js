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
        $.ajax({
            url: `${BASE_URL}/StarCraft/images/StarCraft?kind=footer`,
            success(imageFooter) {
                let htmlStr = "";
                htmlStr +=
                    `  <img src="${BASE_URL}/images/StarCraft/footer-logo-1.png">
                       <img src="${BASE_URL}/images/StarCraft/footer-logo-2.png">
                        `;
                $(".footer-logo").html(htmlStr);
                resolve();
            }
        })
    })
};