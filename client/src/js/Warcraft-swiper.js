// Swiper
import Swiper from "swiper";
$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: false, // 循环模式选项

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesOffsetBefore: 0,
        direction: 'horizontal',
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 40,

        // 分页器点击
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    })
    // 插入节点
    $(".swiper-pagination-bullet").html(`<div></div>`)
});