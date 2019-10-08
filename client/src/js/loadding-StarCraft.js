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
                            <span style="background-image: url(${BASE_URL}/images/slide_1.jpg);">
                            <p class="anim-item anim-right">
                                <img src="${BASE_URL}/images/slideItem_1.png">
                                <a><img src="${BASE_URL}/images/slideItem_0.png"></a>
                            </p>
                            </span>
                        </div>
                        <div class="swiper-slide">
                            <span style="background-image: url(${BASE_URL}/images/slide_2.jpg);">
                            <p class="anim-item anim-right">
                                <img src="${BASE_URL}/images/slideItem_2.png">
                                <a><img src="${BASE_URL}/images/slideItem_0.png"></a>
                            </p>
                            </span>
                        </div>
                        <div class="swiper-slide">
                            <span style="background-image: url(${BASE_URL}/images/slide_3.jpg);">
                            <p class="anim-item anim-right">
                                <img src="${BASE_URL}/images/slideItem_3.png">
                                <a><img src="${BASE_URL}/images/slideItem_0.png"></a>
                            </p>
                            </span>
                        </div>
                        <div class="swiper-slide">
                            <span style="background-image: url(${BASE_URL}/images/slide_4.jpg);">
                            <p class="anim-item anim-right">
                                <img src="${BASE_URL}/images/slideItem_4.png">
                                <a><img src="${BASE_URL}/images/slideItem_0.png"></a>
                            </p>
                            </span>
                        </div>
                        `;
                $(".swiper-wrapper").html(htmlStr);
                resolve();
            }
        })
    })
}