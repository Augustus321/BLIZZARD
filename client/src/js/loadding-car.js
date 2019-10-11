import { BASE_URL } from "./lib";

let name = sessionStorage.name;
export function loaddingCar() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/store/introduce?kind=${name}`,
            success(res) {
                console.log(res);
                
                $(".car-list").html(`${(function() {
                    let carHtmlStr = "";
                    $.each(res.contentlist,(_,type) =>{
                        carHtmlStr += `<li style="background-image:url(${BASE_URL}/images/shopping/${type.shopbg})">

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