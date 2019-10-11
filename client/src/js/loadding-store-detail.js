import { BASE_URL } from "./lib";

// 请求数据
let idSearch = location.search.split("=")[1];

export function loaddingDetail() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/store/detail?kind=${idSearch}`,
            success(res) {
                console.log(res);
                
                $(".store-detail").html(`

                <div class="store-detail-box" style="background-image:url(${BASE_URL}/images/shopping/${res.contentlist[0].bannerbg})">
                    <div class="store-detail-information" data-img="${res.contentlist[0].shopbg}">
                        <div class="store-detail-title">
                            <img class="store-detail-logo" src="${BASE_URL}/images/shopping/${res.contentlist[0].gamelogo}" width="60px">
                            <div class="detail-title">
                                <h3>${res.contentlist[0].name}</h3>
                                <p>${res.contentlist[0].title}</p>
                            </div>
                        </div>
                        <div class="detail-text">
                            <span>${res.contentlist[0].introduce}</span>
                            <span class="detail-price">${res.contentlist[0].price}</span>
                        </div>
                        <div class="detail-link">
                            <a href="javascript:;" class="detail-buy">立即购买</a>
                            <span class="detail-car">
                                <i class="fa fa-heart-o" aria-hidden="true"></i>添加至心愿单
                            </span>
                        </div>
                    </div>
                </div>
                    `);
                resolve(res.contentlist);
            }
        })
    })
}