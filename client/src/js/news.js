import "../less/news.less";
import {
    loaddingImmg
} from "./loadding-news";
import {
    BASE_URL
} from "./lib";

$(function () {
    //tab选项卡
    let color_bd = ["012650", "2D0F0F", "2D1B11", "190938", "0F0F11", "0E1B3E", "281506", "012650"];
    $(".news-menu li").on("click", function () {
        $("body").css({
            backgroundImage: `url(http://localhost:8081/images/news/news-bg-${$(this).index()}.jpg)`,
            backgroundColor: `#${color_bd[$(this).index()]}`
        });
    });

    //点击去往新闻详情页
    $(".news-im li").on("click", function () {
        console.log($(this).index());
        location.href="../pages/newsDetail.html";
    });

})













//新闻页全部新闻
fetch("http://127.0.0.1:8081/news/recentNews")
    .then(response => response.json())
    .then(data => {
        let htmlStr = "";
        data.forEach((list, index) => {
            htmlStr +=
                `
                <li>
                    <div class="list">
                    <div class="list-img">
                        <img src="${BASE_URL}/images/news/news-list0/list-${index+1}.jpg" style="width: 245px;">
                    </div>
                        <div class="list-work">
                            <p class="list-name">${data[index].className}</p>
                            <p class="list-title">${data[index].title}</p>
                            <p class="list-word">${data[index].word}</p>
                            <i class="iconfont ${function(){
                                if(data[index].comment==0){
                                    return comment-none;
                                }
                                if(data[index].comment==1){
                                    return comment;
                                }
                            }}">&#xe618;<span class="comment-sum">1</span></i><span class="list-day">${data[index].day}</span>
                        </div>
                    </div>
                </li>
                `
            $(".news-lists").html(htmlStr);
        });
        $(".news-lists").html(htmlStr);
    })
loaddingImmg();