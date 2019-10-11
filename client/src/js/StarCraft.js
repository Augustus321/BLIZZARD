import "../less/StarCraft.less";
import {
    loaddingFlash,
    loaddingFooter,
    loaddingSmm,
    loaddingVideo
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
loaddingFooter();
loaddingSmm();
loaddingVideo();

$(function () {
    // 点击小三角形下拉单
    $(".footer-hiding").hide();
    $(".footer-hiding-btn").on("click", function () {
        $(".footer-hiding").slideToggle();
        $(this).children("span").toggleClass("transform");
    });
})



// 获取动画元素
let animItems = [...document.querySelectorAll(".anim-item")];
// 获取动画元素在页面中的位置
let offsets = []; // 记录位置
animItems.forEach(animItem => {
    // offsetTop：获取元素在页面中的位置
    offsets.push(animItem.offsetTop);
});
// 记录网页滚动的距离
let offset = 0;
// 获取浏览器窗口的高度
let height = window.innerHeight;
window.onscroll = function () {
    // 更新页面滚动的距离
    offset = document.body.scrollTop || document.documentElement.scrollTop;
    // 判断是否滚动到了指定位置
    // 如果到了指定动画元素的位置
    // 则直接将其的动画状态设置为running即可
    offsets.forEach((loc, index) => {
        if (offset + height > loc + 300) {
            animItems[index].style.animationPlayState = "running";
        }
    })
}