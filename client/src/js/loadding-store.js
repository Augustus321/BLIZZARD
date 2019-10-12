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
                console.log(res.contentlist);
                $(".store-shopping-list").html(`${(function(){
                    let tj = '';
                    let tjbox = '';
                    let tjtitle = '';
                    let tjHtmlStr = "";
                    let jx = '';
                    let jxbox = '';
                    let jxtitle = '';
                    let jxHtmlStr = "";
                    let dxlx = '';
                    let dxlxbox = '';
                    let dxlxtitle = '';
                    let dxlxHtmlStr = "";
                    let rmzl = '';
                    let rmzlbox = '';
                    let rmzltitle = '';
                    let rmzlHtmlStr = "";
                    let allHtmlStr = "";
                    $.each(res.contentlist,(_,type) =>{
                        if(type.kindone == "tj"){
                            tjtitle = type.type;
                            tj = `<li id="${type.id}" style="background-image:url(${BASE_URL}/images/shopping/${type.shopbg})" class="store-information" data-img="${type.shopbg}">
                            <div class="store-text-box">
                                <img class="store-game-logo" src="${BASE_URL}/images/shopping/${type.gamelogo}" width="40px">
                                <h2>${type.name}</h2>
                                <p>${type.title}</p>
                                <span>${type.pricetitle}</span>
                            </div>
                        </li>`;
                            tjbox += tj;
                            
                        }
                        if(type.kindone == "jx"){
                            jxtitle = type.type;
                            jx = `<li id="${type.id}"  style="background-image:url(${BASE_URL}/images/shopping/${type.shopbg})" class="store-information" data-img="${type.shopbg}">
                            <div class="store-text-box">
                                <img class="store-game-logo" src="${BASE_URL}/images/shopping/${type.gamelogo}" width="40px">
                                <h2>${type.name}</h2>
                                <p>${type.title}</p>
                                <span>${type.pricetitle}</span>
                            </div>
                        </li>`;
                        jxbox += jx;
                            
                        }
                        if(type.kindone == "dxlx"){
                            dxlxtitle = type.type;
                            dxlx = `<li id="${type.id}"  style="background-image:url(${BASE_URL}/images/shopping/${type.shopbg})" class="store-information" data-img="${type.shopbg}">
                            <div class="store-text-box">
                                <img class="store-game-logo" src="${BASE_URL}/images/shopping/${type.gamelogo}" width="40px">
                                <h2>${type.name}</h2>
                                <p>${type.title}</p>
                                <span>${type.pricetitle}</span>
                            </div>
                        </li>`;
                        dxlxbox += dxlx;
                            
                        }
                        if(type.kindone == "rmzl"){
                            rmzltitle = type.type;
                            rmzl = `<li id="${type.id}"  style="background-image:url(${BASE_URL}/images/shopping/${type.shopbg})" class="store-information" data-img="${type.shopbg}">
                            <div class="store-text-box">
                                <img class="store-game-logo" src="${BASE_URL}/images/shopping/${type.gamelogo}" width="40px">
                                <h2>${type.name}</h2>
                                <p>${type.title}</p>
                                <span>${type.pricetitle}</span>
                            </div>
                        </li>`;
                        rmzlbox += rmzl;
                            
                        }
                        tjHtmlStr = `<li class="store-type">
                                            <h1 class="store-title">${tjtitle}</h1>
                                            <ul class="store-shopping-list-ul">
                                                ${tjbox}
                                            </ul>
                                    </li>`;
                        jxHtmlStr = `<li class="store-type">
                                    <h1 class="store-title">${jxtitle}</h1>
                                    <ul class="store-shopping-list-ul">
                                        ${jxbox}
                                    </ul>
                            </li>`;
                        dxlxHtmlStr = `<li class="store-type">
                                            <h1 class="store-title">${dxlxtitle}</h1>
                                            <ul class="store-shopping-list-ul">
                                                ${dxlxbox}
                                            </ul>
                                    </li>`;
                        rmzlHtmlStr = `<li class="store-type">
                                            <h1 class="store-title">${rmzltitle}</h1>
                                            <ul class="store-shopping-list-ul">
                                                ${rmzlbox}
                                            </ul>
                                    </li>`;            
                        allHtmlStr = tjHtmlStr + jxHtmlStr + dxlxHtmlStr + rmzlHtmlStr;
                    })
                    return allHtmlStr;
                    
                })()}`
                );
                resolve(res.contentlist);
            }
        })
    })
}