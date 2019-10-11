import "../less/index-nav.less";
import "../less/Warcraft.less";
import { BASE_URL } from "./lib";
import "./Navbar"
$(function () {

    // 头部逻辑
    // 记录页面滚动距离
    let offset = 0;
    //监听窗口滚动
    window.onscroll = function () {
        // 获取窗口滚动的距离
        offset = document.body.scrollTop || document.documentElement.scrollTop;
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
        ViedoShow(site);
    })
    $(".Navbar-overlay").click(function(){
        popBox = false;
        ViedoShow();
    })
    $("#popBox img").click(function(){
        popBox = false;
        ViedoShow();
    })
    function ViedoShow(src){
        if(popBox == true){
            $("#popBox").addClass("Navshow");
            $(".popBox-content video").html(` <source src="${src}">`);
            $(".popBox-content video").trigger('play');
            $(".Navbar-overlay").addClass("Navshow");
            setTimeout(() => {
                $("#popBox").addClass("popBox-animation");
            }, 200);
        }else if(popBox == false){
            $("#popBox").removeClass("Navshow");
            $(".popBox-content video").trigger('pause');
            $(".popBox-content video").html(``);
            $(".Navbar-overlay").removeClass("Navshow");
            $("#popBox").removeClass("popBox-animation");
        }
    }
})
