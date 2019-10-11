import { BASE_URL } from "./lib";


export function loaddingFlash() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/store/images?kind=banner`,
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

// 选项卡
export function loaddingTab() {
    $.ajax({
        url: `${BASE_URL}/store/images?kind=nav`,
        success(res) {
            let NavHtmlStr = "";
            $.each(res, (index, imgname) => {
                NavHtmlStr += `<li class="tab-control">
                    <img src="${BASE_URL}/images/store/${imgname}">
                </li>`;
            })
            $(".store-nav-list").html(NavHtmlStr);
        }
    })
}

// 商品
export function loaddingShop() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/store/shopping?kind=tj`,
            success(res) {
                $(".store-shopping-list").html(`
                    <li>
                        <h1 class="title">${res.type}</h1>
                        <ul>
                        ${(function() {
                            let shopHtmlStr = "";
                            $.each(res.contentlist, (_, shops) => {
                                shopHtmlStr += `<li style="background:url(${BASE_URL}/images/shopping/${res.shopbg})">
                                <h2>${res.name}</h2>
                                <p>${res.title}</p>
                                <p>${res.pricetitle}</p>
                            </li>`
                            })
                            return shopHtmlStr;
                        })()}
                        </ul>
                    </li>`
                    );
                resolve(res.contentlist);
            }
        })
    })
}