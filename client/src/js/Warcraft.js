import "../less/index-nav.less";
import "../less/Warcraft.less";
import { BASE_URL } from "./lib";
import "./Navbar";
import "../js/Warcraft-swiper";
import "./Warcraft-animate";
$(function () {
    // 头部逻辑
    // 记录页面滚动距离
    let offset = 0;
    //监听窗口滚动
    window.onscroll = function () {
        // 获取窗口滚动的距离
        offset = document.body.scrollTop || document.documentElement.scrollTop;
        head_fiexd();
        preorder_fiexd();
        gotop_fiexd();
    }
    // 返回顶部固定
    function gotop_fiexd(){
        if (offset > 299) {
            $(".gotop").addClass("Navshow");
        }
        else {
            $(".gotop").removeClass("Navshow");
        }
    }
    // 立即预购固定
    function preorder_fiexd (){
        if (offset > 799) {
            $(".preorder").addClass("Navshow");
        }
        else {
            $(".preorder").removeClass("Navshow");
        }
    }
    // 头部导航固定
    function head_fiexd(){
        // this.console.log(window.outerHeight);
        if (offset > 60) {
            $("#Warcraft-hd").addClass("fixed");
        }
        else {
            $("#Warcraft-hd").removeClass("fixed");
        }
    }
    // 头部逻辑结束


    // 查看全部
    $('.btn').click(function () {
        let HtmlStr = ``;
        for (let i = 5; i < 13; i++) {
            HtmlStr += `<div>
                <img src="${BASE_URL}/images/Warcraft/screenshot_${i}.jpg" alt="">
                <div class="box-shadow"></div>
            </div>`
        }
        $(".Row-content").html(HtmlStr);
        $('.section-btn').css('display', 'none');
    });
    // 查看全部结束

    // 弹出视频
    let popBox = false;
    $(".video-click").click(function(){
        popBox = !popBox;
        let site = $(this).data("src");
        let str = $(this).data("str");
        ViedoShow(site,str);
    })
    $(".gameplay-img").click(function(){
        popBox = !popBox;
        let site = $(this).data("src");
        let str = $(this).data("str");
        ViedoShow(site,str);
    })
    $(".battle-video").click(function(){
        popBox = !popBox;
        let site = $(this).data("src");
        let str = $(this).data("str");
        ViedoShow(site,str);
    })
    $(".Navbar-overlay").click(function(){
        popBox = false;
        ViedoShow();
    })
    $("#popBox img").click(function(){
        popBox = false;
        ViedoShow();
    })
    function ViedoShow(src,str){
        if(popBox == true){
            $("#popBox").addClass("Navshow");
            $(".popBox-head").html(`${str}`);
            $(".popBox-content").html(`<video controls="controls" autoplay="autoplay" preload="auto"><source src="${src}"></video>`);
            $(".popBox-content video").trigger('play');
            $(".Navbar-overlay").addClass("Navshow");
            setTimeout(() => {
                $("#popBox").addClass("popBox-animation");
            }, 200);
        }else if(popBox == false){
            $("#popBox").removeClass("Navshow");
            $(".popBox-content video").trigger('pause');
            $(".popBox-content video").remove();
            $(".popBox-head").html(``);
            $(".Navbar-overlay").removeClass("Navshow");
            $("#popBox").removeClass("popBox-animation");
        }
    }

    // 切换图片
    $(".hero-head").click(function(){
        let src = $(this).data("src");
        let node = $(this);
        switch_img(src,node);
    })
    function switch_img (src,node){
        $(".Art img").remove();
        $(".Art").html(`<img src="${src}" />`)
        $(".hero-head").removeClass('checked');
        node.addClass("checked");
    }
})
