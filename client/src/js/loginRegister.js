import "../less/loginRegister.less";
import {
    loaddingLogo
} from "./loadding-loginRegister";

loaddingLogo();


//获取注册登录的按钮
let card = $(".card");
let card_dv = $(".card-dv");
let useName = $(".useName");
let email = $(".email");
let password = $(".password");
let psw_p = $(".psw-p");
let password_dv = $(".password-dv");
let phone = $(".phone-number");
let phone_dv = $(".phone-dv");
let code = $(".code");
let code_btn = $(".code-btn");
let code_dv = $(".code-dv");
let change = $(".change");

$(function () {
    //点击标签，下方的div显示与隐藏
    $(".card").on("click", function () {
        $(".card-dv").show("fast");
    });
    $("html").on("click", function (e) {
        if(e.target.className!=="card"){
            $(".card-dv").fadeOut("slow");
        }
    });
});