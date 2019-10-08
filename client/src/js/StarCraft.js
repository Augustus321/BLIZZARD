import "../less/StarCraft.less";
// import "../js/fn.js";
import {
    loaddingFlash,
    loaddingBanner,
    loaddingPhone
} from "./loadding-StarCraft";

//swiper的设置
loaddingFlash().then(() => {
    let swiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            autoplayDisableOnInteraction: false,
        },
        effect: 'fade',
        speed: 500,
    })
});
