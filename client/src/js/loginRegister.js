import "../less/loginRegister.less";
import {
    loaddingLogo
} from "./loadding-loginRegister";
import "../js/register";
loaddingLogo();
// 表单验证
$(function () {
    // 密码强度判断
    $(".password").bind("input propertychange",function(event){
        let num = $(".password").val().length;
        let str = $(".password").val();
        // 判断是否包含字母
        function strCheck(str){
            if(/([a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z])/.exec(str)){
                return true;
            }
            else{
                return false;
            }
        }
        if(num == 8){
            $(".psw-p").text("普通")
            $(".psw-p").css("color","#fff");
        }
        else if(num == 8){
            if(strCheck(str) == true){
                $(".psw-p").text("精良");
                $(".psw-p").css("color","#0070ff");
            }
        }
        else if(num == 9 || num == 10){
            if(strCheck(str) == true){
                $(".psw-p").text("史诗");
                $(".psw-p").css("color","#a335ee");
            }
        }
        else if(num >= 11){
            if(strCheck(str) == true){
                $(".psw-p").text("传说");
                 $(".psw-p").css("color","#ff8000");
            }
        }
        else{
            $(".psw-p").text("粗糙");
            $(".psw-p").css("color","#9d9d9d");
        }
    });

    // 邮箱验证
    var loemail = document.querySelector(".email");
    var emver = document.querySelector(".warning");
    loemail.oninput = function(){
        let reg = new RegExp(this.dataset.reg);
        if (reg.test(loemail.value)) {
            // 合法
            $(".warning").css("display","none");
            sessionStorage['email-satate'] = true;
        } else {
            // 不合法
            $(".warning").css("display","block");
            sessionStorage['email-satate'] = false;
        }
    }

    // 身份证号验证
    var locard = document.querySelector(".card");
    locard.oninput = function(){
        let reg = new RegExp(this.dataset.reg);
        if (reg.test(locard.value)) {
            // 合法
            $(".card-warning").css("display","none");
            sessionStorage['card-satate'] = true;
        } else {
            // 不合法
            $(".card-warning").css("display","block");
            sessionStorage['card-satate'] = false;
        }
    }

    // 手机号码验证
    var lopone = document.querySelector(".phone-number");
    lopone.oninput = function(){
        let reg = new RegExp(this.dataset.reg);
        if (reg.test(lopone.value)) {
            // 合法
            $(".pone-warning").css("display","none");
            sessionStorage['pone-satate'] = true;
        } else {
            // 不合法
            $(".pone-warning").css("display","block");
            sessionStorage['pone-satate'] = false;
        }
    }
    
});