import { BASE_URL } from "./lib";


export function loaddingFlash() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/store/Banners?kind=Banner`,
            success(res) {
                console.log(res);
            let {BannerAll} = res;
            let BannerAllHtmlStr = "";
            $.each(BannerAll, (_, obj) => {
                iconHtmlStr += `<div class="swiper-slide">
                                    <img src="${BASE_URL}/images/store/${obj.imgGame}" alt="">
                            </div>
                </figure>`;
            });
                $(".swiper-wrapper").html(htmlStr);
                resolve();
            }
        })
    })
}