import { BASE_URL } from "./lib";

// 请求数据
let idSearch = location.search.split("=")[1];

export function loaddingDetail() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/store/?kind=${idSearch}`,
            success(res) {
                console.log(res);
                
                $(".store-detail").html(`

                <div class="store-detail-box" style="background-image:url(${BASE_URL}/images/store/${})">
                <div class="detail-information">

                </div>
            </div>
                    `);
                resolve(res.contentlist);
            }
        })
    })
}