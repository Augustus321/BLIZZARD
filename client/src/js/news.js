import "../less/news.less";

//tab选项卡
$(".news-list li").on("click", function () {
    console.log($(".news-list li").index());
    $("body").css({
        backgroundImage: `url(http://localhost:8081/images/news/news-bg-${$(this).index()}.jpg)`
    });
});
let recentNews = {};
// , {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(recentNews)
// }
fetch("http://127.0.0.1:8081/news/recentNews")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // shoppingPro(data);
    })