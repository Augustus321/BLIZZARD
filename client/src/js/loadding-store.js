import { BASE_URL } from "./lib";


export function loaddingFlash() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/store/images?kind=banner`,
            success(res) {
                console.log(res);
                let { BannerAll } = res;
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
            url: `${BASE_URL}/store/shopping?kind=all`,
            success(res) {
                console.log(res)
                // $(".store-shopping-list").html(`
                //     <li class="store-type">
                //         <h1 class="store-title">${res.contentlist[0].type}</h1>
                //         <ul class="store-shopping-list-ul">
                //         ${(function () {
                //         let shopHtmlStr = "";
                //         $.each(res.contentlist, (_, shops) => {
                //             shopHtmlStr += `
                //                 <li style="background-image:url(${BASE_URL}/images/shopping/${shops.shopbg})" class="store-information">
                //                     <div class="store-text-box">
                //                         <h2>${shops.name}</h2>
                //                         <p>${shops.title}</p>
                //                         <span>${shops.pricetitle}</span>
                //                     </div>
                //                 </li>`
                //         })
                //         return shopHtmlStr;
                //     })()}
                //         </ul>
                //     </li>`
                // );
                // resolve(res.contentlist);
            }
        })
    })
}