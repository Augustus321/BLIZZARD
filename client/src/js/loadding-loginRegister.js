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



// let user = {
//     username: '',
//     password: ''
// }
let inputs = [...document.querySelectorAll(".input")];
// 1. 请求数据
// 执行注册
$(".btn-blue").on("click", function () {
    // 获取用户输入的信息
    let user = {};
    inputs.forEach(input => {
        user[input.id] = input.value;
    });
    // 判断是否为空
    if (!user.card || !user.username || !user.password || !user.tel || !user.email) {
        alert("请完善信息！");
        return;
    }
    // 执行注册
    fetch("http://127.0.0.1:8081/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status == "201") {
                alert("用户已存在！");
            } else if (data.status == "200") {
                alert("注册成功！");
                sessionStorage.LOGIN_USER = JSON.stringify(user);
                location.href = "../index.html";
            }
        });
});



//登录
$(".login-btn").on("click", function () {
    let user = {
        username: username.value,
        password: password.value
    };
    if (!user.username || !user.password) {
        alert("请输入账号或密码！");
        return;
    }
    fetch("http://127.0.0.1:8081/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            switch (data.status) {
                case "200": {
                    alert("登陆成功！");
                    // 判断是否记住账号密码
                    if (checkbox.checked) {
                        localStorage.LOC_USER = JSON.stringify(user);
                    } else {
                        localStorage.removeItem("LOC_USER");
                    }
                    sessionStorage.LOGIN_USER = JSON.stringify(data.user);
                    location.href = "../index.html";
                }
                break;
            case "202": {
                alert("用户名不存在！");
            }
            break;
            case "203": {
                alert("密码错误！");
            }
            break;
            }
        })
});