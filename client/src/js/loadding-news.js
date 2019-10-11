function loaddingList(data) {
    let htmlStr = "";
    let parent = document.querySelector(".news-list");
    data.forEach((recentNews, index) => {
        console.log(data, recentNews, index)
        htmlStr += `
        <li>
            <div class="list">
                <img src="">
                <div class="list-work">
                    <p class="list-name">${recentNews.className}</p>
                    <p class="list-title">${recentNews.title}</p>
                    <p class="list-word">${recentNews.word}</p>
                    <i></i><span>${recentNews.day}</span>
                </div>
            </div>
        </li>
        `;
    });
    parent.innerHTML = htmlStr;
}
// export function loaddingFlash(data) {
//     return new Promise((resolve, reject) => {
//         console.log(data)
//     })
// };