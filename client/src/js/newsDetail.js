import "../less/newsDetail.less";
import {
    BASE_URL
} from "./lib";
import {
    loaddingDetails
} from "./loadding-newsDetails";
import "./logging-status";
import "./Navbar";


$(function () {
    loaddingDetails().then(() => {
        let mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            slidesPerView: 6,
            spaceBetween: 40,
            autoplay: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    });
})

let id = (location.href).split("=")[1];
fetch("http://10.2.0.202:8081/news/recentNews")
    .then(response => response.json())
    .then(data => {
        let htmlStr = "";
        htmlStr +=
            ` <p class="small">${data[id].className}</p>
                <p class="title">${data[id].title}</p>
                <span class="tem">魔兽世界运营团队</span><span class="day">${data[id].day}</span>
                <img src=${BASE_URL}/images/news/news-list0/list-${id*1+1}.jpg>
                <p class="detail">${data[id].detail}</p>
                <p class="detail-title">${data[id].small}</p>
                <p class="detail-word">${data[id].frame}</p>
                `
        $(".main-right").html(htmlStr);
    });
loaddingDetails()