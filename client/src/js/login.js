import "../less/login.less";

$("#login").click(function(){
    fetch("http://10.2.0.202:8081/user/login",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: $("#login-account").val(),
            password: $("#login-password").val()
        })

    })
    .then(response => response.json())
    .then(data => {
        if(data.errMsg == "登录成功"){
            alert(`登录成功，欢迎：${data.tishi.name}`);
            console.log(data.tishi);
            sessionStorage['login'] = "1";
            sessionStorage['email']  = `${data.tishi.email}`;
            sessionStorage['name'] = `${data.tishi.name}`
            history.go(-1);
        }
        if(data.errMsg == "用户不存在"){
            alert(`用户不存在，请注册！`);
        }
        else{
            alert('密码有误，请重新登录！');
        }
    })
})