import { BASE_URL } from "./lib";


export function loaddingFlash() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/store/banners?kind=banner`,
            success(res) {
                console.log(res);
            let {BannerAll} = res;
            let BannerAllHtmlStr = "";
            $.each(BannerAll, (_, obj) => {
                BannerAllHtmlStr += `
                            <div class="swiper-slide">
                                <div class="swiper-box"  style="background:url(${BASE_URL}/images/store/${obj.bgImg}) no-repeat;">
                                    <div class="swiper-po">
                                        <img src="${BASE_URL}/images/store/${obj.imgGame}" alt="" class="swiper-image">
                                        <h5 class="swiper-text">${obj.bannerText}</h5>
                                        <a href="javascript:;" class="swiper-link">立即购买</a>
                                    </div>
                                </div>
                            </div>`;
            });
                $(".swiper-wrapper").html(BannerAllHtmlStr);
                resolve();
            }
        })
    })
}