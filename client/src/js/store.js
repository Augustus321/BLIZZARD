import "../less/store.less";
import "./Navbar";
import Swiper from "swiper";
import {
    loaddingFlash,
    loaddingTab,
    loaddingShop
} from "./loadding-store";

// 加载swiper图片
loaddingFlash().then(() => {
    let mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,//自动切换

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },

    })
})

// 加载导航选项卡
loaddingTab();

// 加载商品
loaddingShop().then(() =>{
    $(".store-information").on("click", function() {
        location.href = `./store-detail.html?id=${this.id}`;
    })
});