import "../less/news.less";
import {
    loaddingList
} from "./loadding-news";
//tab选项卡
$(".news-list li").on("click", function () {
    console.log($(".news-list li").index());
    $("body").css({
        backgroundImage: `url(http://localhost:8081/images/news/news-bg-${$(this).index()}.jpg)`
    });
});
fetch("http://127.0.0.1:8081/news/recentNews")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let htmlStr = "";
        data.forEach((list, index) => {
            htmlStr +=
                `
                <li>
                    <div class="list">
                        <img src="" style="width: 245px;">
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