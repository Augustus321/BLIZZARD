import { BASE_URL } from "./lib";

let email = sessionStorage.email;
export function loaddingCar() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/car/introduce?kind=${email}`,
            success(res) {
                console.log(res);
                
                $(".car-list").html(`${(function() {
                    let carHtmlStr = "";
                    $.each(res.contentlist,(_,type) =>{
                        carHtmlStr += `<li id="${type.id}" style="background-image:url(${BASE_URL}/images/shopping/${type.shopbg})" class="store-information" data-img="${type.shopbg}">
                        <div class="store-text-box">
                            <img class="store-game-logo" src="${BASE_URL}/images/shopping/${type.gamelogo}" width="40px">
                            <h2>${type.name}</h2>
                            <p>${type.title}</p>
                            <span>${type.price}</span>
                        </div>
                        <div class="detail-link">
                            <a href="javascript:;" class="detail-buy">立即购买</a>
                            <span class="detail-car"  data-id="${type.id}">
                            <i class="fa fa-times" aria-hidden="true"></i>从心愿单中移除
                            </span>
                        </div>
                    </li>`
                    })
                    return carHtmlStr;
                })()}

                    `);
                resolve(res.contentlist);
            }
        })
    })
}