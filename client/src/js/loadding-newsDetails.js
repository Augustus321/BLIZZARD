import {
    BASE_URL
} from "./lib";

export function loaddingDetails() {
    return new Promise((resolve, reject) => {
        fetch("http://127.0.0.1:8081/news/recentNews")
            .then(response => response.json())
            .then(data => {
                let htmlStr = "";
                $(data).each((index, list) => {
                    htmlStr += `
                    <div class="swiper-slide">
                        <img class="swiper-sm-img" src="${BASE_URL}/images/news/news-list0/list-${index+1}.jpg">
                        <div class="swiper-right">
                        <p class="swiper-sm-title">${list.className}</p>
                        <p class="swiper-sm-day">${list.day}</p>
                        <p class="swiper-sm-word">${list.title}</p>
                        </div>
                    </div>`;
                    $(".swiper-wrapper").html(htmlStr);
                });
            })
        resolve();
    })
}
// fetch("http://127.0.0.1:8081/news/recentNews")
//     .then(response => response.json())
//     .then(data => {
//         let htmlStr = "";
//         data.forEach((list, index) => {
//             console.log(list)
//             console.log(index)
//             htmlStr +=
//                 `
//                 <img class="swiper-sm-img" src="">
//                 <p class="swiper-sm-title">${list.className}</p>
//                 <p class="swiper-sm-day">${list.day}</p>
//                 <p class="swiper-sm-word">${list.title}</p>
//                 `
//         });
//         $(".news-lists").html(htmlStr);
//         $(".news-lists li").on("click", function () {
//             location.href = `./newsDetail.html?id=${$(this).index()}`;
//         });

//     })