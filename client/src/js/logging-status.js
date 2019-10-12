// import { Session } from "inspector"
console.log("登录状态已确认");
$(function(){
    if(sessionStorage['login']){
        $('#information div ').css('padding','10px 20px')
        $("#Navbar-act span").html(`${sessionStorage['name']}`);
        $("#login-url").css("display","none");
        $(".Navbar-modalSection p").html(`${sessionStorage['name']}`);
        $(".Navbar-modalSection span").html(`${sessionStorage['email']}`);
        $(".nav-reg").css("display","none");
        $(".logout").css("display",'block');
        $(".login-a").css("display","none");
    }
    else{
        $("#Navbar-act span").html(`我的账户`);
        $(".logout").css("display",'none');
        $(".login-a").css("display","inline-block");
    }
    $(".logout").click(function(){
        sessionStorage.clear();
        location.reload();
    })
})