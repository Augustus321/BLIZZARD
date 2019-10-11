import {
    BASE_URL
} from "./lib";
export function loaddingLogo() {
    return new Promise((resolve, reject) => {
        let htmlStr = ` 
        <img src="${BASE_URL}/images/loginRegister/loginRegister-logo.png">`;
        $(".logo").html(htmlStr);
        resolve();
    })
};

// 跳转登录页面
$(function () {
    $(".btn-login").on("click", function () {
        $(".box").hide();
        $(".box-login").show();
    });
})
